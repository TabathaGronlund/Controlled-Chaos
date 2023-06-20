import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'


const MonthlyList = (props) => {

    const [taskList, setTaskList] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        axios.get("http://localhost:8000/api/task")
            .then((res) => {
                setTaskList(res.data)
            })
            .catch((err) =>
                console.log(err)
            )
    }, [])


    const deleteFilter = (idTask) => {

        axios.delete(`http://localhost:8000/api/task/edit/${idTask}`)
            .then((res) => {
                console.log(res.data)
                const newTask = taskList.filter((task, index) =>
                task._id !== idTask)
                setTaskList(newTask)
            })
            .catch((err) => {
                console.log(err)
            })
    }



    return (
        <div>
            <Link to={`/`}>Home</Link> 
            <h1>All Tasks:</h1>
            {taskList.map((task, index) => (
                <ul key={index}>
                    <h1 className="title-note">
                        {task.title}
                    </h1>
                    <p className="description-note">
                        {task.description}
                    </p>
                    <input class="submitdelete" type="submit" 
                    value="Delete Task" onClick={() => deleteFilter(task._id)} />
                    <input class="submitedit" type="submit" 
                    value="Edit Task" onClick={() => navigate(`/task/edit/${task._id}`)} />
                </ul>
            ))}
            <button onClick={()=> navigate(`/create`)}>Create Another Task</button>
        </div>
    )
}

export default MonthlyList
