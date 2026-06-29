import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-gray-600 h-15 px-50 py-3'>
        <nav className='text-2xl font-semibold flex justify-between text-white'>
            <Link to={"/"}>Home</Link>
            <Link to={"/browse"}>Browse</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/classComp"}>ClassComp</Link>
        </nav>
    </div>
  )
}

export default Navbar