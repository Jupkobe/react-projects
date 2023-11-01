import { useEffect, useState } from 'react'
import Input from './components/Input'
import TodoList from './components/TodoList'


export default function App() {
  const [todoList, setTodoList] = useState(() => JSON.parse(localStorage.getItem("todos")) || []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList])

  function addNewTodo(todo) {
    setTodoList(prevTodoList => ([
      ...prevTodoList,
      todo
    ]));
  }

  function deleteTodo(e, todoID) {
    if (e.target.tagName !== "BUTTON") return;
    setTodoList(prevList => (
      prevList.filter(todo => todo.id !== todoID)
      )
    );
  };


  function toggleTodo(todoID) {
    setTodoList(prevTodoList => 
      (prevTodoList.map((todo => {
        return todo.id === todoID ? {...todo, completed: !todo.completed} : todo;
      }))
    ));
  };

  return (
    <>
    <div className='bg-white text-black min-h-screen w-full'>
      <div className='w-full flex justify-center items-center p-4'>
        <div id='app' className='bg-slate-100 w-full flex flex-col border border-black shadow-md rounded-md items-center p-4 sm:w-1/3'>
          <h1 className="mb-6 text-2xl font-bold">Todo App</h1>
          <Input
            todoList={todoList}
            addNewTodo={addNewTodo}
          />
          <TodoList 
            todoList={todoList}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />  
          <footer>
            <p>Made by <strong><a className="text-black visited:text-black" href="https://github.com/Jupkobe">Jupkobe</a></strong></p>
          </footer>
        </div>
      </div>
    </div>
    </>
  )
}
