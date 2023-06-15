import React, { useState, useEffect } from "react"
import "./index.css";

function Tasks() {
    const [nameTask, setNameTask] = useState('')
    const [priorityTask, setPriorityTask] = useState('')
    const [tasks, setTasks] = useState([])

    const handleChangeName = (e) => {
        setNameTask(e.target.value);
    }

    const handleChangePriority = (e) => {
        setPriorityTask(e.target.value);
    }

    const handleCreateTask = () => {
        if(!nameTask || !priorityTask) {
            alert('Please enter both title and task priority');
        }
        const newList = [...tasks, { title: nameTask, priority: priorityTask}].sort((a, b) => a.priority - b.priority)
        setTasks(newList);
    }

    const handleDeleteTask = (index) => {
        debugger
        // const newList = tasks.splice(index, 1);
        // console.log('task ya borradas', newList);
        const newList = tasks.filter((task, i) => i !== index);

        setTasks(newList);
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
                       onChange={handleChangeName}
                       placeholder="Task Title"/>
                <input data-testid="input-task-priority" className="large mx-8"
                        type = 'number'
                        text = {priorityTask}
                        onChange={handleChangePriority}
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
                                    <td><button className="danger" onClick={() => handleDeleteTask(i)}>Delete</button></td>
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