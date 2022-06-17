import { useState } from "react";
import TasksOpen from './TasksOpen'

const Header = () => {
    //Criando states
    const [tasksAbertas, setTasksAbertas] = useState([])
    const [tasksFinalizadas, setTasksFinalizadas] = useState([])
    //Deletando tarefa
    const deletaTaskAberta = (id) => {
        setTasksAbertas(tasksAbertas.filter((task) => task.id !== id));
    };
    const deletaTaskFinalizada = (id) => {
        setTasksFinalizadas(tasksFinalizadas.filter((task) => task.id !== id));
    }; 
    //Alterando se a tarefa foi reaberta 
    const reabrirTask = (id) => {
        tasksFinalizadas.forEach((task) => {
            if(task.id === id){
                if(task.reminder === false){
                    task.reminder = true
                    var obj= {text: task.text, id: task.id, reminder: task.reminder};
                    setTasksAbertas([...tasksAbertas, obj])
                }
            }
        })
        deletaTaskFinalizada(id)
    };
    //Alterando se a tarefa foi finalizada 
    const finalizarTask = (id) => {
        tasksAbertas.forEach((task) => {
            if(task.id === id){
                if(task.reminder === true){
                    task.reminder = false
                    var obj= {text: task.text, id: task.id, reminder: task.reminder};
                    setTasksFinalizadas([...tasksFinalizadas, obj])
                }
            }
        })
        deletaTaskAberta(id)
    };

    //state para pegar valor do input
    const [text, setText] = useState(null);
    //criando id
    const [id, setId] = useState(0)

    //inserir na task
    const setCreate = (text) => {
        const obj = {text: text, id: id, reminder: true};
        setId(id + 1);
        setTasksAbertas([...tasksAbertas, obj])
    }


    return (
        <header className="header">
            <h1>Minhas Tarefas</h1><br></br>
            <div className="divInput">
                <input className="input" onChange={(e) => setText(e.target.value)} placeholder='Digite uma nova tarefa'></input>
                <button className="button" onClick={() => setCreate(text)}>Inserir tarefa</button>
            </div>

            <TasksOpen tasksAbertas={tasksAbertas} tasksFinalizadas={tasksFinalizadas} deletaTaskAberta={deletaTaskAberta} deletaTaskFinalizada={deletaTaskFinalizada} reabrirTask={reabrirTask} finalizarTask={finalizarTask}/>
        </header>
    );
};

export default Header; 