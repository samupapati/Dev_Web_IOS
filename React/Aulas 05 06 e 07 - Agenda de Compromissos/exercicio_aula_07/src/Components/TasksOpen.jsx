import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FaToggleOn } from 'react-icons/fa'
import { FaToggleOff } from 'react-icons/fa'


export default function TaskItem({ todo, deleteTodo }) {

    const [todoFinalizado, setTodoFinalizado] = useState([])
    
    const moverTodo = () => {
        setTodoFinalizado([...todoFinalizado, todo])
        //deleteTodo(todo.id)
    }

    const [text, setText] = useState(null);
    const [id, setId] = useState(0)
    const createTodoFinalizado = (text) => {
        const todo0bj = {text: text, id: id};
        setId(id+1);
        moverTodo(todo0bj)
    }

    return (
        <div>
            <div>
                <span>{todo.text}</span>
                <FaToggleOn onClick={() => createTodoFinalizado(todo.id)}/>
                <FaTimes onClick={() => deleteTodo(todo.id)} />
            </div>
        </div>
    )
}