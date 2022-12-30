import React, { useState } from 'react'
import { AiOutlineBehanceSquare, AiOutlineTwitter, AiFillInstagram, AiFillPlayCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaPinterest, } from "react-icons/fa";
import MainImage from '../Assets/man-01.png'
import '../../Styles/Main.css'

export default function Main() {
    const [state] = useState({
        title: "Johnthan Doe",
        paragraph: `Note that the development build is not optimized.To create a {br}production build, use npm run build.`,
        buttontext: " My Profile"
    })
    return (
        <>
            <div className='mainContainer'>
                <div className='leftDiv'>
                    <div className='icon'>
                        <ul>
                            <li><BsFacebook /></li>
                            <li><AiOutlineTwitter /></li>
                            <li><FaPinterest /></li>
                            <li><AiFillInstagram /></li>
                            <li><AiOutlineBehanceSquare /></li>
                        </ul>
                    </div>
                    <h1>{state.title}</h1>
                    <p>{state.paragraph}</p>
                    <button className='button1'>
                        {state.buttontext}
                    </button>

                    <button className='iconButton'>
                        <AiFillPlayCircle />
                    </button>
                </div>
                <div className='rightDiv'>
                    <img src={MainImage} alt=""></img>
                </div>
            </div></>
    )
}
