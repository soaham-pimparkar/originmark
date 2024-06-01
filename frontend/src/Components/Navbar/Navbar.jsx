import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../../Styles/Navbar.css"
import userimg from '../../assets/userSVG.svg'

const Navbar = () => {
    const [userLoggedIn,setUserLoggedIn]=useState(false);
    
    return (
        <div id='nav_sec'>
            <div id='nav_d1'>
                <p onClick={()=>{
                    setUserLoggedIn(!userLoggedIn)
                }}>OriginMark</p>
            </div>
            <div id='nav_d2'>
                <ul>
                    <li>
                        <NavLink to='/' className={({ isActive }) => ` ${isActive ? "navActiveLink" : "navLink"}`}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/create' className={({ isActive }) => `navLink ${isActive ? "navActiveLink" : "navLink"}`}>Create</NavLink>
                    </li>
                    <li>
                        <NavLink to='/verify' className={({ isActive }) => `navLink ${isActive ? "navActiveLink" : "navLink"}`}>Verify</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={({ isActive }) => `navLink ${isActive ? "navActiveLink" : "navLink"}`}>About Us</NavLink>
                    </li>
                </ul>
            </div>
            {
                
                !userLoggedIn &&
                <Link 
                to='/user'
                id='nav_d3'>
                  <img src={userimg} alt="" />
                </Link>
            }
            {
                userLoggedIn &&
                <div id='nav_d4'>

                    <Link 
                    to='/login'
                    className='l1'>
                        Log In
                    </Link>

                    <Link 
                    to='/signup'
                    className='l2'>
                        <div>
                            Sign Up
                        </div>
                    </Link>
                </div>
            }


        </div>
    )
}

export default Navbar