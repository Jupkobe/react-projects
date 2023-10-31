import { useEffect, useState } from 'react'

export default function Todo({ id, completed, title}) {
    return (
        <div id={id} className={completed ? "todo completed" : "todo"}>
            <p>{title}</p> <button className="bg-transparent text-2xl border-0 before:content-['\2715']"></button>
        </div>
    )
}
