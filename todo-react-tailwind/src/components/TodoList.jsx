import { useEffect, useRef } from 'react';
import autoAnimate from '@formkit/auto-animate';


export default function TodoList({ todoList, deleteTodo, toggleTodo }) {
    const parentElem = useRef(null)

    
    useEffect(() => {
        parentElem.current && autoAnimate(parentElem.current, {
            duration: 150,
        })
    }, [parentElem]);

    const todoElems = [];
    
    todoList.forEach((todo) => {
        const newElem =(
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
        )
        todo.completed ? todoElems.push(newElem) : todoElems.unshift(newElem);
    });
    

    return (
        <div ref={parentElem} className="w-full flex flex-col py-4 justify-around">
            {todoElems}
        </div>
    )
}


// import { useState, useRef, useEffect } from 'react'
// import autoAnimate from '@formkit/auto-animate'

// const Dropdown = () => {
//   const parent = useRef(null)

//   useEffect(() => {
//     parent.current && autoAnimate(parent.current)
//   }, [parent])

//   return <div ref={parent}>
//     <strong className="dropdown-label" onClick={reveal}>Click me to open!</strong>
//     { show && <p className="dropdown-content" >Lorum ipsum...</p> }
//   </div>
// }