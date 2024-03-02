import React from 'react'
import './Dashboard.css'
// import NavBar from "../components/NavBar/NavBar";
import ControlPanel from '../components/ControlPanel/ControlPanel'
import NavBar from '../components/NavBar/NavBar'
import TaskBar from '../components/TaskBar/TaskBar'

function Dashboard() {
  return (
    <div className=".container">
      <div className="rows">
        <div className=".container">
          <div className="boundary">
            <TaskBar></TaskBar>
          </div>
        </div>
      </div>
      <div className="dashboard-container">
        <div className=".navbar">
          <NavBar />
        </div>

        <div>
          <ControlPanel></ControlPanel>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
