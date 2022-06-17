import { FaTimesCircle } from 'react-icons/fa'
import { FaToggleOff } from "react-icons/fa"

export default function TasksDone({tasksFinalizadas, reabrirTarefa, deletaTarefaFinalizada}) {

    return (
        <div>
            {tasksFinalizadas.map((task, index) => (
                <div className='tarefasFinalizadas tarefas' key={index}>
                    {task.text}
                    <div>
                        <FaToggleOff className='botaoAtivo' onClick={() => reabrirTarefa(task.id)} />
                        <FaTimesCircle className='botaoExcluir' onClick={() => deletaTarefaFinalizada(task.id)} />
                    </div>
                </div>
            ))}
        </div>
    )
}