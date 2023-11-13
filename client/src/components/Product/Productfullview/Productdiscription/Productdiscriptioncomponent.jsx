import React from 'react'
import './productdiscriptioncomponent.css'

const Productdiscriptioncomponent = () => {
    return (
        <div className='productdiscription'>
            <div className='productdiscription__header'>Product Detail</div>
            <div className='productdiscription__content'>
                <div className='productdiscription__table'>
                    <div>Brand</div>
                    <div>NIKE</div>
                </div>
                <div className='productdiscription__table'>
                    <div>Model</div>
                    <div>M51</div>
                </div>
                <div className='productdiscription__table'>
                    <div>Color</div>
                    <div>White</div>
                </div>
                <div className='productdiscription__table'>
                    <div>price</div>
                    <div>White</div>
                </div>

                <div className='productdiscription__paragraph'>The Nike City Rep TR is a versatile shoe that brings durability and flexibility to your active urban lifestyle. Rubber tread gives you grip on a range of surfaces, while foam cushioning keeps your foot comfortablefrom outdoor workouts into the rest of your day.</div>
            </div>
        </div>
    )
}

export default Productdiscriptioncomponent