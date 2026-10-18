import './css/todo.css'
function Todo(){
    return (
        <div className="todo">
            <div className='todo_header'>to do list</div>
            <div className='todo_add'>
                <input type='text' placeholder='add task' className='to_do_input'/>
            </div>

        </div>
    )
}
export default Todo