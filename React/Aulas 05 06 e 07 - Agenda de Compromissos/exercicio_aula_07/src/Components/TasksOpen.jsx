import { FaTimesCircle } from 'react-icons/fa'
import { FaToggleOn } from 'react-icons/fa'
import TasksDone from './TasksDone'


export default function TasksOpen({ tasksAbertas, tasksFinalizadas, deletaTaskAberta, deletaTaskFinalizada, reabrirTask, finalizarTask}) {

    return (
        <div>
            <h2>Tarefas ativas</h2>
            {tasksAbertas.length > 0 ? tasksAbertas.map((task) => (
                task.reminder === true ?
                    <div className='tarefasAtivas tarefas' id={task.id} key={task.id}>
                        {task.text}
                        <div>
                            <FaToggleOn className='botaoAtivo' onClick={() => finalizarTask(task.id)} />
                            <FaTimesCircle className='botaoExcluir' onClick={() => deletaTaskAberta(task.id)} />
                        </div>
                    </div>
                    :
                    null
            )) : <h2 className='notTarefas'>Não há tarefas</h2>}
            <h2>Tarefas finalizadas</h2>
            {tasksFinalizadas.len
            ? 
                <TasksDone tasksFinalizadas={tasksFinalizadas} reabrirTask={reabrirTask} deletaTaskFinalizada={deletaTaskFinalizada}/> 
                : 
                <h2 className='notTarefas'>Não há tarefas</h2>}
        </div>
    )
}