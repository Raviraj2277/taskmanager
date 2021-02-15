import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState } from 'react'


function App() {
  const [tasks , setTasks]= useState ([ {id:1 ,
    text:"work1",
    time:"8:00 am "
  },
    {
    id:2 ,
    text:"work2" ,
    time:"9:00 am "
    }

])
  return (
    <div className='container'>
     
     <Header/>
     <Tasks tasks={tasks}/>
     
    </div>
  );
}

export default App;
