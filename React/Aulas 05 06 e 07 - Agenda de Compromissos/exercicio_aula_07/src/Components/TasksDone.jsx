import { FaTimesCircle } from 'react-icons/fa'
import { FaToggleOff } from "react-icons/fa"

export default function TasksDone({tasksFinalizadas, reabrirTask, deletaTaskFinalizada}) {

    return (
        <div>
            {tasksFinalizadas.map((task) => (
                <div className='tarefasFinalizadas tarefas' id={task.id} key={task.id}>
                    {task.text}
                    <div>
                        <FaToggleOff className='botaoAtivo' onClick={() => reabrirTask(task.id)} />
                        <FaTimesCircle className='botaoExcluir' onClick={() => deletaTaskFinalizada(task.id)} />
                    </div>
                </div>
            ))}
        </div>
    )
}