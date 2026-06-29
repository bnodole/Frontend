import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import CustomUseState from './hooks/CustomUseState'
import FormData from './hooks/FormData'
import CustomUseEffect from './hooks/CustomUseEffect'
import ProductsApi from './hooks/ProductsApi'
import Browse from './components/Browse'
import Contact from './components/Contact'
import About from './components/About'
import Navbar from './components/Navbar'
import Home from './components/Home';
import ClassComp from './components/ClassComp';

function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  // useEffect(()=>{
  //   const timer = setTimeout(()=>{
  //     navigate("/browse");
  //   },2000);
  // },[navigate]);
  return (
    <>
      <Navbar/>
        
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/browse" element={<Browse/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/classComp" element={<ClassComp name={"Test User2"}/>}/>
      </Routes>
    </>
  )
}

export default App
