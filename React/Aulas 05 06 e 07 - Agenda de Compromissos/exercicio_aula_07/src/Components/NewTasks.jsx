import { useState } from "react"

export default function NewTasks({ addTodo }){
    const [text, setText] = useState(null);
    const [id, setId] = useState(0)

    const todoCreate = (text) =>{
        const todo0bj = {text: text, id: id};
        setId(id+1);
        addTodo(todo0bj)
    }


    return(
        <div className="blocoTarefas">
            <h1>Minhas Tarefas</h1>
            <input onChange={(e) => setText(e.target.value)} className="tarefa"/>
            <button onClick={() => todoCreate(text)}>Adicionar Tarefa</button>
        </div>
    )
}