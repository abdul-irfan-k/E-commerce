import React from 'react'
import './similarproductcomponent.css'
import Productcomponent from '../../Product/Productcomponent'

const Similarproductcomponent = () => {
    return (
        <div className='similarproduct-c'>
            <div className='similarproduct__header'>Similar product</div>
            <div className='similarproduct__content'>
                <Productcomponent />
                <Productcomponent />
                <Productcomponent />
                <Productcomponent />
            </div>
        </div>
    )
}

export default Similarproductcomponent