import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import AddTask from './components/AddTask/AddTask'
import ShowTask from './components/ShowTask/ShowTask'
function App() {
  
  const [tasklist, setTaskList] = useState([]);
  return (
     
    
      <div className='App'>
        <Header/>
        <AddTask tasklist={tasklist} setTaskList={setTaskList}/>
        <ShowTask tasklist={tasklist} setTaskList={setTaskList}/>
      </div>
      
    
  )
}

export default App
