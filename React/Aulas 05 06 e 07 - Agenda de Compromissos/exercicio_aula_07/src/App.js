import { useState } from 'react'
import NewTasks from './Components/NewTasks'
import TasksOpen from './Components/TasksOpen'

export default function App(){
  const [todos, setTodos] = useState([])
  const addTodo = (todo) => {
    setTodos([...todos, todo])
  }
  const deleteTodo = (id) => {
    var filtered = todos.filter((todo) => todo.id !== id)
    setTodos(filtered)
  }
  
  return(
    <div className='App'>
      {todos.length > 0 ? (
        <NewTasks addTodo={addTodo}/>
      ) : (
        <NewTasks addTodo={addTodo}/>
      )}
      {todos.length > 0 ? (
        null
      ) : (
        'Não há tarefas'
      )}
      {todos.map((todo) => (
        <div key={todo.id}>
          <TasksOpen todo={todo} deleteTodo={deleteTodo}/>
        </div>
      ))}
    </div>
  )
}

