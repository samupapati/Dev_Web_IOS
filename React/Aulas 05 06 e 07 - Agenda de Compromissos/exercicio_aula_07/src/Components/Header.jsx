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
        // tasks.map((task) => 
        //     {if(task.id === id){
        //         if(task.reminder === true){
        //             task.reminder = false

        //             console.log('reminder:')
        //             console.log(task.reminder)

        //             setTasks([...tasks, task.reminder])

        //             console.log('tasks:')
        //             console.log(tasks)

        //         } else{
        //             task.reminder = true
                    
        //             console.log('reminder:')
        //             console.log(task.reminder)

        //             setTasks([...tasks, task.reminder])

        //             console.log('tasks:')
        //             console.log(tasks)
        //         }
        //     }}
        // );
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

            <TasksOpen tasks={tasks} mudarReminder={mudarReminder} deletaTarefa={deletaTarefa} />
        </header>
    );
};

export default Header; 