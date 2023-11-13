import React from 'react'
import './productcomponent.css'
import { FavoriteBorder, StarHalf, CurrencyRupeeOutlined } from '@mui/icons-material'

const Productcomponent = () => {
    return (
        <div className='productcard'>
            <div className="productcard__savebutton"><FavoriteBorder /></div>
            <div className="productcard__image">
                <img src="http://localhost:8000/asset/image/product/pumashoe.jpeg" alt="" />
            </div>
            <div className="productcard__content">
                <span><StarHalf /></span>
                <h1 >Puma</h1>
                <div className='productcard__currencytext'><CurrencyRupeeOutlined />999</div>
                <p>Glory sneakers for mens</p>
            </div>
        </div>
    )
}

export default Productcomponent