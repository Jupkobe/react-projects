import { useEffect, useRef } from 'react';
import autoAnimate from '@formkit/auto-animate';


export default function TodoList({ todos, deleteTodo, toggleTodo }) {
    const parentElem = useRef(null)
    
    useEffect(() => {
        parentElem.current && autoAnimate(parentElem.current, {duration: 100})
    }, [parentElem]);

    const sortedTodos = todos.sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1))

    console.log(sortedTodos);

    const todoElems = sortedTodos.map((todo) => (
        <div 
            key={todo.id}
            id={todo.id} 
            onClick={(e) => {    
                if (e.target.tagName !== "DIV" && e.target.tagName !== "P") return;
                toggleTodo(todo.id);
            }} 
            className={todo.completed ? "todo completed" : "todo"}>
                <p>{todo.title}</p>
                <button
                    onClick={() => deleteTodo(todo.id)}
                    className="bg-transparent text-2xl border-0 before:content-['\2715']">
                </button>
        </div>
    ));
    
    return (
        <div ref={parentElem} className="w-full flex flex-col py-4 justify-around">
            {todoElems}
        </div>
    )
}