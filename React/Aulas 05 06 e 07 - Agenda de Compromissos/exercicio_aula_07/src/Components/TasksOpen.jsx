import { useState } from 'react'
import { FaTimesCircle } from 'react-icons/fa'
import { FaToggleOn } from 'react-icons/fa'
import TasksDone from './TasksDone'


export default function TasksOpen({ tasks, mudarReminder, deletaTarefa, setTasks }) {

    // const [tasksFinalizadas, setTasksFinalizadas] = useState([])

    // const [id, setId] = useState(0)
    // const finalizarTask = (text, reminder, id) => {
    //     var obj = {text: text, id: id, reminder: false};
    //     setId(id + 1);
    //     deletaTarefa()
    //     setTasks([...tasksFinalizadas, obj])

    // }

    return (
        <div>
            <h2>Tarefas ativas</h2>
            {tasks.length > 0 ? tasks.map((task) => (
                task.reminder === true ?
                    <div className='tarefasAtivas tarefas' key={task.id}>
                        {task.text}
                        <div>
                            <FaToggleOn className='botaoAtivo' onClick={() => mudarReminder(task.id)} />
                            <FaTimesCircle className='botaoExcluir' onClick={() => deletaTarefa(task.id)} />
                        </div>
                        {/* botao de teste
                        <button onClick={() => finalizarTask(task.id, task.text, task.reminder)}>teste</button> */}
                    </div>
                    :
                    null
            )) : <h2 className='notTarefas'>Não há tarefas</h2>}
            <h2>Tarefas finalizadas</h2>
            {tasks.length > 0 ? tasks.map((task) => (
                task.reminder === false ?
                    <TasksDone tasks={tasks} mudarReminder={mudarReminder} deletaTarefa={deletaTarefa} />
                    :
                    null
            )) : <h2 className='notTarefas'>Não há tarefas</h2>}
        </div>
    )
}