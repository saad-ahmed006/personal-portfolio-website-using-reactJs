import React, { useState } from 'react'
import '../../Styles/About.css'
export default function About() {
  const [about]=useState(
    {title:'About',
    heading:'My About',
    description:'Note that the development build is not optimized. To create a production build, use npm run build'
  }
  )
  return (
    <div className='AboutHeader'>
    <h3>{about.title}</h3>
    <h1>{about.heading}</h1>
    <p>{about.description}</p>
    <div className='borderBottom'></div>
  </div>

  )
}
