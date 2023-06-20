import React from 'react'
import { useNavigate } from 'react-router-dom'

const TaskHome = () => {
  const navigate = useNavigate()
  return (
    <div>
      {/* <h3 className="title-home">
      Let
      </h3> */}
      {/* <p>
        add API for random quotes here
      </p> */}
      <div>
        <button onClick={() => navigate(`/monthly`)} className="sum-mon size-cal-btn">Calendar</button>
        {/* Have this button take you to the display all page where you can see all the tasks */}
      </div>
      <div>
        <button onClick={() => navigate(`/notes`)} className="sticky-btn-style">Sticky Notes</button>
      </div>
      <div className="month-year">
        <button onClick={() => navigate(`/task`)} className="sum-mon">All tasks</button>
        <p className="quote-1">When we try to juggle everything, it's hard to enjoy anything.</p>
        <button onClick={() => navigate(`/inspiration`)} className="sum-mon">inspire</button>

      </div>
        <button onClick={() => navigate(`/create`)} className="create-chaos">Create A Task</button>
    </div>
  )
}

export default TaskHome
