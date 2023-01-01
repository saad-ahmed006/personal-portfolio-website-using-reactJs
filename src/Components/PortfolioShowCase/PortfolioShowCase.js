import React, { useState } from 'react'
import '../../Styles/PortfolioShowCase.css'
import data from './Data'
import PortfolioItem from './PortfolioItem'

export default function PortfolioShowCase() {
    const [Item, setitem] = useState(data)
    const filterItem = (categItem) => {
        const updateItem = data.filter((curEle) => {
            return curEle.category === categItem
        })
        setitem(updateItem)
    }
    const [PortFolio] = useState(
        {
            title: 'Portfolio ShowCase',
            heading: 'My Portfolio',
            description: 'Note that the development build is not optimized. To create a production build, use npm run build',
        }
    )

    return (
        <>
            <div className='PortfolioHeader'>
                <h3>{PortFolio.title}</h3>
                <h1>{PortFolio.heading}</h1>
                <p>{PortFolio.description}</p>
                <div className='borderBottom'></div>
            </div>

            <div className='PortfolioContainer'>
                <div className='PortfolioButton'>
                    <button className='button' onClick={() => setitem(data)} >AllWorks</button>
                    <button className='button' onClick={() => filterItem("artdirection")}>Art Direction</button>
                    <button className='button' onClick={() => filterItem("branding")}>Branding</button>
                    <button className='button' onClick={() => filterItem("design")}>Design</button>
                    <button className='button' onClick={() => filterItem("web")}>Web</button>
                </div>
                <div className='Container'>
                    {Item.map((d) => {
                        const { name, image } = d
                        return (
                            <PortfolioItem name={name} Image={image} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

