import React, {useState} from 'react'
import './ToDoList.css'
function ToDoList() {
    const [tasks, setTasks] = useState(["Go to work", "Check emails", "Attend meeting","Write today's progress in journal"]);
    const [newTask, setNewTask] = useState("");

    function handleExampleTaskClick(task) {
        setTasks(t => [...t, task]);
        setNewTask('');
      }

    function handleInputChange(event){
        setNewTask(event.target.value);

    }
    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
        
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }
    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks]; // Create a copy of the current tasks array
            [updatedTasks[index - 1], updatedTasks[index]] = 
            [updatedTasks[index], updatedTasks[index - 1]]; // Swap the values of clicked task with above task
            setTasks(updatedTasks); // Update the tasks state so that tasks show
        }
    }
    function moveTaskDown(index){
        if(index < tasks.length - 1){ // If not the last task do the swap
            const updatedTasks = [...tasks]; // Create a copy of the current tasks array
            [updatedTasks[index], updatedTasks[index + 1]] =
            [updatedTasks[index + 1], updatedTasks[index]];  // Swap the values of clicked task with below task
            setTasks(updatedTasks); // Update the tasks state so that tasks show
        }
    }

  return (
    <div className='to-do-list'>
        <h1>To-Do-Tasker</h1>

        <div>
            Example tasks:
            <button className='add-button' onClick={() => handleExampleTaskClick('Attend conference')}>Attend conference</button>
            <button className='add-button' onClick={() => handleExampleTaskClick('Update documentation')}>Update documentation</button>
            <button className='add-button' onClick={() => handleExampleTaskClick('Debug code issue')}>Debug code issue</button>
        </div>
        <div>
            <input type="text" placeholder='Enter a task...' value={newTask} onChange={handleInputChange} />
            <button className='add-button' onClick={addTask}>Add Task</button>
        </div>

        <ol>
            {tasks.map((task,index) =>
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
                    <button className='move-button' onClick={() => moveTaskUp(index)}>⬆️</button>
                    <button className='move-button' onClick={() => moveTaskDown(index)}>⬇️</button>
                </li>
            )}
        </ol>
    </div>
  )
}

export default ToDoList