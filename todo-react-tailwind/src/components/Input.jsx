import { useState } from 'react'

export default function Input({ todoList, addNewTodo }) {
  const [todo, setTodo] = useState({
    id: 0,
    completed: false,
    title: "",
  }); 

  const newID = todoList.length > 0 ? (todoList[todoList.length - 1].id + 1) : 1;

  function handleChange(e) {
    const {value} = e.target;
    setTodo(prevTodo => ({
      ...prevTodo,
      title: value,
      id: newID,
    }));    
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!todo.title) return;
    addNewTodo(todo);
  }

  return (
    <div id="inputs" className="w-full flex justify-center pb-4 mb-2 border-b border-b-black">
        <form onSubmit={handleSubmit} className="w-full flex justify-between gap-1">
            <input onChange={handleChange} type="text" value={todo.title} className="border border-black rounded-md py-1 px-2 w-full" />
            <button className="border border-black rounded-md py-1 px-2">Submit</button>
        </form>
    </div>
  )
}
