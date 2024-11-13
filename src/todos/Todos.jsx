import React, { useState } from 'react';
import style from '../style.module.css'
import Swal from 'sweetalert2';
import Counter from './Counter';
import useTitle from '../hooks/useTitle';

const Todos = () => {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState("")
    useTitle("کار ها")
    const addTodo = (e) => {
        e.preventDefault();
        if (input.trim()) {
            setTodos([...todos, { text: input, completed: false }])
            setInput('')
            
            
        }
    }
    const toggleComplete = index => {
        const newTodos = [...todos]
        newTodos[index].completed = !newTodos[index].completed
        setTodos(newTodos)
    }
    const removeTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index)
        setTodos(newTodos)
    }

    return (

        <div className=' container mt-5'>
            <h1 className=' text-center'>لیست وظایف</h1>
            <form onSubmit={addTodo}>
                <div className=' input-group mb-3'>
                    <input className=' form-control' type="text" value={input} onChange={e => setInput(e.target.value)} placeholder='...وظیفه جدید را وارد کنید' />
                    <button className=' btn btn-primary' type='submit'>اظافه کردن</button>
                </div>
            </form>
            <ul className=' list-group'>
                {todos.map((todo, index) => {
                    <li key={index} onClick={() => toggleComplete(index)}
                        className={`list-group-item d-flex fustify-content-between align-items-center ${todo.completed ? 'list-group-item-success' : ""}`}>
                        {todo.text}
                        <button className=' btn btn-danger btn-sm' onClick={()=>removeTodo(index)}>حذف</button>
                    </li>

                })}
            </ul>
        </div>

    )

}

export default Todos;