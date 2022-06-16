import { useState } from "react";
import TasksOpen from './TasksOpen'

const Header = () => {
    const [tasks, setTasks] = useState([]);
    // Deletar tarefa 
    const deletaTarefa = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };
    //Alterar o reminder 
    const mudarReminder = (id) => {
        setTasks(tasks.map((task) =>
                task.id === id ? { ...task, reminder: !task.reminder } : task
            )
        );
    };

    const [text, setText] = useState(null);
    const [id, setId] = useState(0)

    const setCreate = (text) => {
        const obj = {text: text, id: id, reminder: true};
        setId(id + 1);
        setTasks([...tasks, obj])
    }


    return (
        <header className="header">
            <h1>Minhas Tarefas</h1><br></br>
            <div className="divInput">
                <input className="input" onChange={(e) => setText(e.target.value)}></input>
                <button className="button" onClick={() => setCreate(text)}>Nova Tarefa</button>
            </div>

            <TasksOpen tasks={tasks} mudarReminder={mudarReminder} deletaTarefa={deletaTarefa} setTasks={setTasks}/>
        </header>
    );
};

export default Header; 