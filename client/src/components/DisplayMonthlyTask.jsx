import React from 'react'
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Calendar from 'react-calendar';
// import './App.css'
import "react-calendar/dist/Calendar.css"

const DisplayMonthlyTask = () => {
    const [date, setDate] = useState(new Date());
    return (

    <div className='monthly'>
        <h1 className='text-center'>Calendar</h1>
        <div className='calendar-container'>
            <Calendar onChange={setDate} value={date} />
        </div>
        <p className='text-center'>
            <span className='bold'>Selected Date:</span>{' '}
            {date.toDateString()}
        </p>
        <Link to={`/`}>Home</Link>
    </div>
);
}


export default DisplayMonthlyTask

