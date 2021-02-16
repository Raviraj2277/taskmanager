import Header from './components/Header'
import Tasks from './components/Tasks'
import Add from './components/Add'
import {useState } from 'react'


function App() {
const [showAddTask,setShowAddTask]= useState(false)

  const [tasks , setTasks]= useState ([ {id:1 ,
    text:"work1",
    time:"8:00 am ",
    reminder:true

  },
    {
    id:2 ,
    text:"work2" ,
    time:"9:00 am ",
    reminder:false
    }

])

const addTask=(task)=>{
  const id = Math.floor(Math.random()*1000)+1
  const newTask = {id , ...task}
  setTasks([...tasks , newTask])
}

const deleteTask=(id)=>{
  setTasks(tasks.filter((task)=>task.id!==id))
}

const tReminder =(id)=>{
  setTasks(
    tasks.map((task)=> 
    task.id===id ? {...task , reminder: !task.reminder} : task))
}
  return (
    <div className='container'>
     
     <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
     {showAddTask && <Add onAdd={addTask}/>}
     {tasks.length >0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={tReminder}/>: <h3>There is no task</h3>}
     
    </div>
  );
}

export default App;
