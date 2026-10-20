import './css/todoitems.css'
function TodoItems({no,display,text}){
    return (
        <div className='todoitems'>
           <ul> <li className='todoitems_text'>{text}</li> </ul>
        </div>
    )
}
export default TodoItems