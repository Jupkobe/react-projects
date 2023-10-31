import { useEffect, useState } from 'react'
import Input from './components/Input'
import TodoList from './components/TodoList'


export default function App() {
  const localTodos = JSON.parse(localStorage.getItem("todos"));
  const [todoList, setTodoList] = useState(localTodos);

  useEffect(() => {
    if (todoList.length > 0) localStorage.setItem("todos", JSON.stringify(todoList))
    // setTodoList(todoList.sort((c1, c2) => (c1.completed < c2.completed) ? 1 : 0));
  }, [todoList]);


  function addNewTodo(todo) {
    setTodoList(prevTodoList => ([
      ...prevTodoList,
      todo
    ]));
  }

  function deleteTodo(todoID) {
    const newTodos = [];
    todoList.forEach(todo => {
      if (todo.id !== todoID) newTodos.push(todo);
    })
    setTodoList(newTodos);
  };


  function toggleTodo(todoID) {
    setTodoList(prevTodoList => (prevTodoList.map((todo => {
        return todo.id === todoID ? {...todo, completed: !todo.completed} : todo;
      }))
    ))
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
