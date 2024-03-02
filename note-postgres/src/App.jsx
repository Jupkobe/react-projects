import { useEffect, useState } from "react";
import Note from "./components/Note";
import { v4 as uuid } from "uuid";

export default function App() {
  const [noteList, setNoteList] = useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  );
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/notes");

        const notes = await response.json();

        setNotes(notes);
      } catch (e) {
        console.log("Something went wrong while fetching notes: ", e);
      }
    };

    fetchNotes();
  }, []);

  // POST
  const handleAddNote = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      });

      const newNote = await response.json();

      setNotes([newNote, ...notes]);
      setNote({
        title: "",
        content: "",
      });
    } catch (e) {
      console.log("Something went wrong while posting new note: ", e);
    }
  };

  // DELETE
  const deleteNote = async (event, noteId) => {
    event.stopPropagation();

    try {
      await fetch(`http://localhost:5000/api/notes/${noteId}`, {
        method: "DELETE",
      });
      const updatedNotes = notes.filter((note) => note.id !== noteId);

      setNotes(updatedNotes);
    } catch (e) {
      console.log("Something went wrong while deleting the note: ", e);
    }
  };

  // useEffect(() => {
  //   localStorage.setItem("notes", JSON.stringify(noteList));
  // }, [noteList]);

  // // ADD
  // function addNote() {
  //   const newNote = note;
  //   newNote.id = uuid();

  //   setNoteList((prevNoteList) => [...prevNoteList, note]);

  //   setNote({
  //     title: "",
  //     content: "",
  //   });
  // }

  // // DELETE
  // function deleteNote(id) {
  //   setNoteList((prevNoteList) => prevNoteList.filter((note) => note.id != id));
  // }

  // Note Objects
  const noteElems = [];

  notes.forEach((note) =>
    noteElems.push(
      <Note
        key={note.id}
        title={note.title}
        content={note.content}
        deleteNote={(e) => deleteNote(e, note.id)}
      />
    )
  );

  return (
    <>
      <div className="flex flex-col items-center w-full min-h-screen p-8 font-opensans bg-slate-200">
        <div className="grid w-3/4 grid-cols-4 p-2 h-[90vh] bg-orange-50">
          <div className="flex flex-col items-center col-span-1 p-2">
            <div
              id="inputs"
              className="flex flex-col items-center w-full h-full gap-2 p-1 bg-orange-100 shadow-sm shadow-gray-400"
            >
              <div className="flex flex-col items-center w-full bg-orange-100">
                <h1 className="text-5xl">Note App</h1>
                <h2 className="text-2xl">with Postgres</h2>
              </div>
              <div className="flex flex-col w-4/5">
                <label className="text-lg font-semibold" htmlFor="note_title">
                  Title
                </label>
                <input
                  className="w-full p-1 border border-black rounded-sm"
                  id="note_title"
                  type="text"
                  placeholder="Title"
                  maxLength={15}
                  value={note.title}
                  onChange={(e) =>
                    setNote((prevNote) => ({
                      ...prevNote,
                      title: e.target.value,
                    }))
                  }
                  required
                />
              </div>
              <div className="flex flex-col w-4/5">
                <label className="text-lg font-semibold" htmlFor="content">
                  Note
                </label>
                <textarea
                  className="w-full p-1 border border-black rounded-sm"
                  id="content"
                  type="text"
                  value={note.content}
                  required
                  onChange={(e) =>
                    setNote((prevNote) => ({
                      ...prevNote,
                      content: e.target.value,
                    }))
                  }
                  rows={5}
                  placeholder="Don't forget to..."
                />
              </div>
              <button
                className="w-4/5 text-xl font-medium bg-white border border-black rounded-sm"
                onClick={(e) => {
                  if (note.title != "" && note.content != "") {
                    handleAddNote(e);
                  }
                }}
              >
                Create
              </button>
              <footer className="mt-auto font-medium">
                Made by{" "}
                <a href="https://github.com/Jupkobe" className="underline">
                  @Jupkobe
                </a>
              </footer>
            </div>
          </div>
          <div className="grid grid-cols-3 col-span-3 gap-3 p-2 max-h-[88vh] overflow-y-auto place-content-start">
            {noteElems ? (
              <div className="flex justify-center w-full mt-8">
                Seems like you have no posts!
              </div>
            ) : (
              noteElems
            )}
          </div>
        </div>
      </div>
    </>
  );
}
