import './css/todo.css'
import { useEffect, useRef, useState } from 'react'
import TodoItems from './todoitems';

let count = 0
function Todo(){
    const [todos, settodos]  = useState([]);
    const inputref = useRef(null);
    const add = () => {
        settodos([...todos,{no:count++, text:inputref.current.value, display:""}])
        inputref.current.value ="";
        localStorage.setItem("todo_count",count)
    }
    useEffect(()=>{
        settodos(JSON.parse(localStorage.getItem("todos")));
        count = localStorage.getItem("todo_count");
    },[])
    useEffect(()=>{
        console.log(todos);
        localStorage.setItem("todos", JSON.stringify(todos))
    },[todos])
    return (
        <div className="todo">
            <div className='todo_header'>to do list</div>
            <div className='todo_add'>
                <input ref= {inputref} type='text' placeholder='add task' className='todo_input'/>
                <div onClick={()=>{add()}} className='todo_add_btn'>ADD</div>
            </div>    
            <div className="todo_list">
                {todos.map((item, index) => {
                    return <TodoItems key={index} no={item.no} display={item.display} text={item.text}/>
                })}
            </div>
        </div>
    )
}
export default Todo