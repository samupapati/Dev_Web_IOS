import { FaTimesCircle } from 'react-icons/fa'
import { FaToggleOn } from 'react-icons/fa'
import TasksDone from './TasksDone'


export default function TasksOpen({ tasksAbertas, tasksFinalizadas, deletaTarefaAberta, deletaTarefaFinalizada, reabrirTarefa, finalizarTarefa}) {

    return (
        <div>
            <h2>Tarefas ativas</h2>
            {tasksAbertas.length > 0 ? tasksAbertas.map((task, index) => (
                task.reminder === true ?
                    <div className='tarefasAtivas tarefas' key={index}>
                        {task.text}
                        <div>
                            <FaToggleOn className='botaoAtivo' onClick={() => finalizarTarefa(task.id)} />
                            <FaTimesCircle className='botaoExcluir' onClick={() => deletaTarefaAberta(task.id)} />
                        </div>
                    </div>
                    :
                    null
            )) : <h2 className='notTarefas'>Não há tarefas</h2>}
            <h2>Tarefas finalizadas</h2>
            {tasksFinalizadas.length > 0 ? tasksFinalizadas.map((task) => (
                task.reminder === false ?
                    <TasksDone tasksFinalizadas={tasksFinalizadas} reabrirTarefa={reabrirTarefa} deletaTarefaFinalizada={deletaTarefaFinalizada} />
                    :
                    null
            )) : <h2 className='notTarefas'>Não há tarefas</h2>}
        </div>
    )
}