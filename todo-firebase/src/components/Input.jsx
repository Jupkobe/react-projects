import { useState } from 'react'

export default function Input({ addTodo }) {
  const [title, setTitle] = useState(() => ""); 

  function handleChange(e) {
    const {value} = e.target;
    setTitle(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!title) return;

    const newTodo = {
      completed: false,
      title,
    }
    
    addTodo(newTodo);
    setTitle("");
  }

  return (
    <div id="inputs" className="w-full flex justify-center pb-4 mb-2 border-b border-b-black">
        <form onSubmit={handleSubmit} className="w-full flex justify-between gap-1">
            <input onChange={handleChange} type="text" value={title} className="border border-black rounded-md py-1 px-2 w-full" />
            <button className="border border-black rounded-md py-1 px-2">Submit</button>
        </form>
    </div>
  )
}
