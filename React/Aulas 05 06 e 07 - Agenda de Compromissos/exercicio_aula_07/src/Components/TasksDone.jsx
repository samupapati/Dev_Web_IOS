import { FaTimesCircle } from 'react-icons/fa'
import { FaToggleOff } from "react-icons/fa"

export default function TasksDone({ tasks, mudarReminder, deletaTarefa}) {
    return (
        <div>
            {tasks.map((task) => (
                <div className='tarefasFinalizadas tarefas' key={task.id}>
                    {task.text}
                    <div>
                        <FaToggleOff className='botaoAtivo' onClick={() => mudarReminder(task.id)} />
                        <FaTimesCircle className='botaoExcluir' onClick={() => deletaTarefa(task.id)} />
                    </div>
                </div>
            ))}
        </div>
    )
}