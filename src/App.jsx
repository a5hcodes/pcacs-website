import React from 'react'
import './App.css'
import Header from './components/Header'
import ComputerAssociation from './components/ComputerAssociation'
import VisionMission from './components/VisionMission'
import FuturePlans from './components/FuturePlans'
import StudentSupport from './components/StudentSupport'
import Specialization from './components/Specialization'
import Alumini from './components/Alumini'
import Propulsion from './components/Propulsion'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Header />
      <VisionMission />
      <Specialization />
      <StudentSupport />
      <Propulsion />
      <ComputerAssociation />
      <FuturePlans />
      <Alumini />
      <Footer />
    </div>
  )
}
export default App
