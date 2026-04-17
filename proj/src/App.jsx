import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './components/Student'

function App() {

  return (
    <>
    <h1>Student Information</h1>
    <div className="card"><Student name={'Aj'} course={'React'} age={35} /></div>
    <div className="card"><Student name={'John'} course={'Vue'} age={25} /></div>
    <div className="card"><Student name={'Jane'} course={'Angular'} age={30} /></div>
    </>
  )
}

export default App
