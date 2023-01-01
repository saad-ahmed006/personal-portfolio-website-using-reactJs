import React, { useState } from 'react'
import AboutImage from '../Assets/man-01.png'
import '../../Styles/About.css'
export default function About() {
  const [about] = useState(
    {
      title: 'About',
      heading: 'My About',
      description: 'Note that the development build is not optimized. To create a production build, use npm run build',
      abouttitle: 'Hi There!',
      aboutText1: 'Note that the development build is not optimized To create a production builduse npm run build.Note that the development build is not optimized To create a production builduse npm run build.',
      aboutText2: 'Note that the development build is not optimized To create a production builduse npm run build.Note that the development build is not optimized To create a production builduse npm run build.'
    }
  )

  let contact = [
    {
      name: 'Name:',
      value: 'Johnthan Doe'
    },
    {
      name: 'Email:',
      value: 'JohnthanDoe@gmail.com'
    },
    {
      name: 'Phone:',
      value: '+12345678910'
    },
    {
      name: 'Linked in:',
      value: 'Johnthan_Doe123'
    },
  ]
  return (
    <>
      <div className='AboutHeader'>
        <h3>{about.title}</h3>
        <h1>{about.heading}</h1>
        <p>{about.description}</p>
        <div className='borderBottom'></div>
      </div>

      <div className='AboutContainer'>
        <div className='AboutImage'>
          <img src={AboutImage} alt=""></img>
        </div>
        <div className='AboutText'>

          <h1>{about.abouttitle}</h1>
          <p>{about.aboutText1}</p>
          <p>{about.aboutText2}</p>
          <div className='ContactContainer'>
            <Contact name={contact[0].name} value={contact[0].value} />
            <Contact name={contact[1].name} value={contact[1].value} />
          </div>
          <div className='ContactContainer'>
            <Contact name={contact[2].name} value={contact[2].value} />
            <Contact name={contact[3].name} value={contact[3].value} />
          </div>
        </div>
      </div>
    </>
  )
}

const Contact = ({ name, value }) => {
  return (
    <div className='ContactText'>
      <h4>{name}</h4>
      <h5>{value}</h5>
    </div>



  )
}

