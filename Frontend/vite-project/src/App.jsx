import{useEffect,useContext} from 'react'
import './App.css'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Home } from './Pages/Home'
import  AboutUs from './Pages/AboutUs'
import  Appointment  from './Pages/Appointment'
import { Register } from './Pages/Register'
import  LogIn  from './Pages/LogIn'
import { NavBar2 } from './Component/NavBar2';
import { Context } from './main';
import axios from 'axios'


function App() {
  
    
  return (
    <>
    <Router>
      <NavBar2/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/appointment' element={<Appointment/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<LogIn/>} />
      </Routes>
      <ToastContainer position="top-center" />
    </Router>
    </>
  )
}

export default App
//"http://localhost:6000/api/v1/message/send"