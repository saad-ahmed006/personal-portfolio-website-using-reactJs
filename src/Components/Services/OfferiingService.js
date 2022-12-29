import React from 'react'
import '../../Styles/Services.css'
export default function OfferiingService({ Icon, Title, Detail }) {
  return (
    <>
    {/* <div className=''> */}
    {/* <div className='Boxes'> */}
          <div className='Box'>
          <h1 className='Icon'><Icon/></h1>        
          <h2 className='Title'>{Title}</h2>
          <h5 className='Detail'>{Detail}</h5>
          {/* </div> */}
          {/* </div> */}
    </div>
    </>
  )
}


