import { useEffect, useState } from 'react';


export default function TodoList({ todoList, deleteTodo, toggleTodo }) {
    const todoElems = todoList.map((todo) => {
        return (
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
    });
    

    return (
        <div id="todo-list" className="w-full flex flex-col py-4 justify-around">
            {todoElems}
        </div>
    )
}