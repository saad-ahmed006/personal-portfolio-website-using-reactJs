import React from 'react'
import '../../Styles/Footer.css'
import FooterLogo from '../Assets/logo.png'
import { BsFacebook } from 'react-icons/bs'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'

export default function Footer() {
    return (
        <div className='FooterContainer'>
            <div className=''>
                <img src={FooterLogo}></img>
                <p>Search for the keywords to learn more about each warning.To xt, or an empty string for decorative images  jsx-a11y/alt-textwebpack compiled with 1 warning</p>
            </div>
            <div className='FooterIcon'>
                <div>
                    <BsFacebook />
                </div>
                <div>
                    <AiFillInstagram />
                </div>
                <div>
                    <AiFillTwitterCircle />
                </div>
            </div>

        </div>
    )
}
