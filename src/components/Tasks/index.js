import React, { useState, useEffect } from "react"
import "./index.css";

function Tasks() {
    const [nameTask, setNameTask] = useState(null)
    const [priorityTask, setPriorityTask] = useState(null)
    const [tasks, setTasks] = useState([])

    const handleCreateTask = () => {
        console.log('Before newList', tasks)
        setTasks([...tasks, { title: 'Title 1', priority: 2}]);
    }

    useEffect(() => {
        console.log('cambiaron');
    }, [tasks])

    return (
        <div className="layout-column align-items-center justify-content-start">
            <section className="layout-row align-items-center justify-content-center mt-30">
                <input data-testid="input-task-name" className="large mx-8"
                       type = 'text'
                       text = {nameTask}
                       placeholder="Task Title"/>
                <input data-testid="input-task-priority" className="large mx-8"
                        type = 'number'
                        text = {priorityTask}
                       placeholder="Task Priority"/>
                <button data-testid="submit-button" onClick={() => handleCreateTask()} >Add Task</button>
            </section>

            <div className="card w-40 pt-30 pb-8 mt-20">
                <table>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Priority</th>
                    </tr>
                    </thead>
                    <tbody data-testid="tasksList">
                            {tasks.map((task, i) => (
                                <tr key={`row-${i}`}> 
                                    <td> {task.title} </td>
                                    <td> {task.priority} </td>
                                    <td><button className="danger" onClick={(i) => handleDeleteTask()}>Delete</button></td>
                                </tr>
                            )
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Tasks