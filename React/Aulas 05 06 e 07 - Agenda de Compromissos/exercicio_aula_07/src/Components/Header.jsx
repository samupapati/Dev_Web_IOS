import { useState } from "react";
import TasksOpen from './TasksOpen'

const Header = () => {
    const [tasksAbertas, setTasksAbertas] = useState([])
    const [tasksFinalizadas, setTasksFinalizadas] = useState([])
    // Deletar tarefa
    const deletaTarefaAberta = (id) => {
        setTasksAbertas(tasksAbertas.filter((task) => task.id !== id));
    };
    const deletaTarefaFinalizada = (id) => {
        setTasksFinalizadas(tasksFinalizadas.filter((task) => task.id !== id));
    }; 
    //Alterar o reminder 
    const reabrirTarefa = (id) => {
        setTasksAbertas(...tasksAbertas, tasksFinalizadas.map((task) => {
                if(task.id === id){
                    return task.reminder = !task.reminder
                }}
            )
        );
        deletaTarefaFinalizada(id)
    };
    const finalizarTarefa = (id) => {
        setTasksFinalizadas(tasksAbertas.map((task) =>
                task.id === id ? { ...task, reminder: false } : task
            )
        );
        deletaTarefaAberta(id)
    };

    const [text, setText] = useState(null);
    const [id, setId] = useState(0)

    const setCreate = (text) => {
        const obj = {text: text, id: id, reminder: true};
        setId(id + 1);
        setTasksAbertas([...tasksAbertas, obj])
        console.log(tasksAbertas)
    }


    return (
        <header className="header">
            <h1>Minhas Tarefas</h1><br></br>
            <div className="divInput">
                <input className="input" onChange={(e) => setText(e.target.value)}></input>
                <button className="button" onClick={() => setCreate(text)}>Nova Tarefa</button>
            </div>

            <TasksOpen tasksAbertas={tasksAbertas} tasksFinalizadas={tasksFinalizadas} deletaTarefaAberta={deletaTarefaAberta} deletaTarefaFinalizada={deletaTarefaFinalizada} reabrirTarefa={reabrirTarefa} finalizarTarefa={finalizarTarefa}/>
        </header>
    );
};

export default Header; 