import React from 'react'

export default function PortfolioItem(props) {
  return (
        <div className='Image-Container'>
        <img src={props.Image} alt="PortfolioImage"></img>
        <h3>{props.name}</h3>

    </div>
  )

}
