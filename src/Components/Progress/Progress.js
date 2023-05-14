import React, { useState } from 'react'
import '../../Styles/Progress.css'
export default function Progress() {
  const [ProgressText] = useState(
    {
      Subhead: "I,am Expert on",
      title: "Let's Work Together",
      description: "  Line 45:11:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-textLine 45:11: img elements must have an alt prop, either with meaningful text, or an empty string for decorative images jsx-a11y/alt-text",
    }
  )
  return (
    <div className='ProgressContainer'>
      <div className='HireMe'>
        <h4>{ProgressText.Subhead}</h4>
        <h1>{ProgressText.title}</h1>
        <p>{ProgressText.description}</p>
        <button className='ProgressButton'>Hire Me Now</button>

      </div>
      <div className='ProgressBar'>
        <p>HTML</p>
        <div className='HTML'></div>
        <p>CSS</p>
        <div className='CSS'></div>
        <p>JAVASCRIPT</p>
        <div className='JAVASCRIPT'></div>
        <p>REACT JS</p>
        <div className='REACT'></div>
      </div>
    </div>
  )
}
