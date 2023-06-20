

import { useState } from "react"
import logo from "./logo.svg"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css"
import StickyNotes from "./components/StickyNotes"
import TaskHome from "./components/TaskHome"
// import Calendar from "react-calendar"
import DisplayMonthlyTask from "./components/DisplayMonthlyTask"
import Header from "./components/Header"
import MonthlyList from "./components/MonthlyList"
import CreateTask from "./components/CreateTask"
import UpdateTask from "./components/UpdateTask"
import InspirationalQuotes from "./components/InspirationalQuotes"



function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path="/notes" element={<StickyNotes/>}/>
        <Route path="/" element={<TaskHome/>}/>
        <Route path="/monthly" element={<DisplayMonthlyTask/>}/>
        <Route path="/create" element={<CreateTask/>} />
        <Route path="/task" element={<MonthlyList/>} />
        <Route path="/task/edit/:id" element={<UpdateTask/>} />
        <Route path="/inspiration" element={<InspirationalQuotes/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
