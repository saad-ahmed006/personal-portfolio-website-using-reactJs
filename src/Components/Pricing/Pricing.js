import React, { useState } from 'react'
import '../../Styles/Pricing.css'
export default function Pricing() {
    const [about] = useState(
        {
            title: 'Choose a Plan',
            heading: 'Pricing Plan',
            description: 'Note that the development build is not optimized. To create a production build, use npm run build'
        }
    )
    const PricingItemText = [
        {
            title: '$Basic',
            price: '$500',
            p1: '5GB Storage Space',
            p2: '20GB Monthly BandWidth',
            p3: 'My SQL DataBase',
            p4: '100 Email Account',
            p5: '10 free Domain Names',
        },
        {
            title: '$Standard',
            price: '$1000',
            p1: '5GB Storage Space',
            p2: '20GB Monthly BandWidth',
            p3: 'My SQL DataBase',
            p4: '100 Email Account',
            p5: '10 free Domain Names',
        },
        {
            title: '$Premium',
            price: '$1500',
            p1: '5GB Storage Space',
            p2: '20GB Monthly BandWidth',
            p3: 'My SQL DataBase',
            p4: '100 Email Account',
            p5: '10 free Domain Names',
        }
    ]
    return (
        <>
            <div className='PricingHeader'>
                <h3>{about.title}</h3>
                <h1>{about.heading}</h1>
                <p>{about.description}</p>
                <div className='borderBottom'></div>
            </div>
            <div className='PricingItemContainer'>
                {PricingItemText.map((d) => <PricingItem title={d.title} price={d.price} p1={d.p1} p2={d.p2} p3={d.p3} p4={d.p4} p5={d.p5} />)}
            </div>
        </>
    )
}

const PricingItem = ({ title, price, p1, p2, p3, p4, p5 }) => {
    return (
        <div className='PricingItem'>
            <h4>{title}</h4>
            <h1>{price}</h1>
            <p>{p1}</p>
            <div className='divider'></div>
            <p>{p2}</p>
            <div className='divider'></div>
            <p>{p3}</p>
            <div className='divider'></div>
            <p>{p4}</p>
            <div className='divider'></div>
            <p>{p5}</p>
            <div className='divider'></div>
            <button className='PricingButton'>Purchase</button>
        </div>
    )
}
