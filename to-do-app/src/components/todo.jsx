import './css/todo.css'
import { useRef, useState } from 'react'

let count = 0
function Todo(){
    const [todos, settodos]  = useState([]);
    const inputref = useRef(null);
    
    return (
        <div className="todo">
            <div className='todo_header'>to do list</div>
            <div className='todo_add'>
                <input ref= {inputref} type='text' placeholder='add task' className='todo_input'/>
                <div className='todo_add_btn'>ADD</div>
            </div>    
<div className="todo_list">

</div>
        </div>
    )
}
export default Todo