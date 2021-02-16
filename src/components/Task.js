
import {FaTimes} from 'react-icons/fa'
const Task = ({task , onDelete , onToggle}) => {
    return (
        <div className={task.reminder==true ? 'task reminder' : 'task' } onDoubleClick= {()=>onToggle(task.id)} >
            <h3>{task.text} </h3>
            <h4>{task.time}  </h4>
            <FaTimes style={{ color:'red', cursor:'pointer'  }} onClick= {( )=>onDelete(task.id)} />
            

            
        </div>
    )
}

export default Task
