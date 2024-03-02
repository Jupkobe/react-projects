import { useEffect, useState } from 'react'
import Input from './components/Input'
import TodoList from './components/TodoList'
import { addDoc, deleteDoc, onSnapshot, doc, setDoc, getDoc } from 'firebase/firestore';
import { todosCollection, db } from '../firebase';

export default function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(todosCollection, (snapshot) => {
      const todosArr = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }))
      setTodoList(todosArr);
    });

    return unsub;
  });

  async function addTodo(todo) {
    await addDoc(todosCollection, todo);
  }

  async function deleteTodo(todoId) {
    const docRef = doc(db, "todos", todoId);
    await deleteDoc(docRef);
  };

  async function toggleTodo(todoId) {    
    const docRef = doc(db, "todos", todoId);
    const completed = (await getDoc(docRef)).data().completed;
    setDoc(docRef, {completed: !completed}, {merge: true});
  };

  return (
    <>
    <div className='bg-white text-black min-h-screen w-full font-roboto'>
      <div className='w-full flex justify-center items-center p-4'>
        <div id='app' className='bg-slate-100 w-full flex flex-col border border-black shadow-md rounded-md items-center p-4 sm:w-1/3'>
          <h1 className="mb-6 text-2xl font-bold">Todo App</h1>
          <Input
            todos={todoList}
            addTodo={addTodo}
          />
          <TodoList 
            todos={todoList}
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
