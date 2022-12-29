import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineCloseCircle, } from "react-icons/ai";
import Logo from '../Assets/logo.png'
import '../../Styles/Navbar.css'

export default function Navbar() {
    const [toggleOpenDrawer, settoggleOpenDrawer] = useState(false)
    const handleChange = () => {
        settoggleOpenDrawer(!toggleOpenDrawer)
    }
    return (
        <>
            <div className='navbarContainer'>
                <>
                    <div className='logo'>
                        <img src={Logo} alt="img"></img>
                    </div>
                    <div className='navLinks'>
                        <li className='Link'>Home</li>
                        <li className='Link'>Services</li>
                        <li className='Link'>About</li>
                        <li className='Link'>Skills</li>
                        <li className='Link'>Portfolio</li>
                        <li className='Link'>Blog</li>
                        <li className='Link'>Contact</li>
                    </div>
                </>
            </div>
            <div className='tooglelinks'>
                <div className='toggle'>
                    <div className='logo'>
                        <img src={Logo} alt="img"></img>
                    </div>
                    <div className='toogleIcon' onClick={handleChange}>
                        {toggleOpenDrawer ? <AiOutlineCloseCircle /> : <AiOutlineMenu />}
                    </div>
                </div>
                <div className={toggleOpenDrawer ? 'navSlideOpen' : 'navSlideClose'} >
                    <li className='Link'>Home</li>
                    <li className='Link'>Services</li>
                    <li className='Link'>About</li>
                    <li className='Link'>Skills</li>
                    <li className='Link'>Portfolio</li>
                    <li className='Link'>Blog</li>
                    <li className='Link'>Contact</li>
                </div>
            </div>
        </>
    )
}
