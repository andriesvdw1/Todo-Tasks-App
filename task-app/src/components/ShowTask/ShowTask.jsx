import React from 'react'
import penIcon from '../../assets/pencil-square-icon.png'
import trashIcon from '../../assets/recycle-bin-icon.png'
import './ShowTask.css'
function ShowTask({tasklist, setTaskList}) {
    const tasks = [{id: 10001, name: "Task A", time: "3:01:01 AM 2/04/2025"},
        {id: 10002, name: "Task B", time: "3:15:01 AM 2/04/2025"},
        {id: 10003, name: "Task C", time: "3:30:01 AM 2/04/2025"},
    ]
  return (
    <section className='showTask'>
        <div className="head">
            <div>
                <span className='title'>Total tasks:</span>
                <span className='count'>{tasklist.length}</span>
            </div>
            <button className='clearAll' onClick={() => setTaskList([])}>Clear All</button>
            <ul>
                { tasklist.map((task) => (
                    <li key={task.id}>
                    <p>
                        <span className='name'>{task.name}</span>
                        <span className='time'>{task.time}</span>
                    </p>
                    <img className='pen-icon' src={penIcon} alt="pencil edit icon" />
                    <img className='trash-icon' src={trashIcon} alt="trash can delete icon" />
                </li>
                ))}
                
            </ul>
        </div>
    </section>
  )
}

export default ShowTask