import React from 'react'
import BurgerLogo from "../assets/burgerlogo.png"
import {  NavLink } from 'react-router-dom'
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='main'>
            <img src={BurgerLogo} alt="" />
            <div  className='mainLink'>
                <NavLink to="/" >Anasayfa</NavLink>
                <NavLink to="/menü" >Menü</NavLink>
                <NavLink to="/hakkımızda" >Hakkımızda </NavLink>
                <NavLink to="/iletişim" >İletişim</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar