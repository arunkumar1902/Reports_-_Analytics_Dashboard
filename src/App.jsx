import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ReportsDashboard from './pages/ReportsDashboard'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ReportsDashboard></ReportsDashboard>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}
