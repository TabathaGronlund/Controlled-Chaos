
import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { Link } from "react-router-dom"

const UpdateTask = (props) => {
    const { id } = useParams()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")


    const navigate = useNavigate()


    useEffect((id) => {
        axios.get(`http://localhost:8000/api/task/edit/${id}`)
            .then((res) => {
                setTitle(res.data.title)
                setDescription(res.data.description)
            })
            .catch((err) => console.log(err))
    }, [])

    const submitHandler = (e) => {
        e.preventDefault()

        axios.patch(`http://localhost:8000/api/task/edit/${id}`, {

            title,
            description,
        })
            .then((res) => {
                navigate("/")
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (

        <div className="task-container">
            <Link to={`/`}>Home</Link> 
            <h1>Edit Task</h1>

            <form onSubmit={submitHandler}>
                <div className="updatetask">
                    <label>Title:</label>
                    <input onChange={(e) => setTitle(e.target.value)} value={title} name="title" type="text"></input>
                </div>

                <div className="updatetask">
                    <label>Description:</label>
                    <input onChange={(e) => setDescription(e.target.value)} value={description} name="description" type="text"></input>
                </div>

                <input class="submitupdate" type="submit" value="Update" />
            </form>
        </div>
    )
}


export default UpdateTask;
