import { FaTimesCircle } from 'react-icons/fa'
import { FaToggleOn } from 'react-icons/fa'
import TasksDone from './TasksDone'


export default function TasksOpen({ tasks, mudarReminder, deletaTarefa }) {
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