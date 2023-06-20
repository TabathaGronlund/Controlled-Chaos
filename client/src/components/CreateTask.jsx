import React, { useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


const CreateTask = (props) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/create", {
            title,
            description
        })
            .then((res) => {
                setTitle("")
                setDescription("")
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <div>
            <h1>Add a Task</h1>
            <form className="task-form" onSubmit={submitHandler}>

                <div className="task-title">
                    <label>Task</label>
                    <input value={title} type="text" name="task" 
                    onChange={(e) => setTitle(e.target.value)} minLength="3"/>
                </div>

                <div className="task-description">
                    <label>Description</label>
                    <input value={description} type="textarea" name="description" 
                    onChange={(e) => setDescription(e.target.value)} minLength="3" />
                </div>

                <input className="sumbit-task" type="submit" value="Create"/>
            </form>
            <Link to={`/`}>Home</Link> 
        </div>
    )
}

export default CreateTask

