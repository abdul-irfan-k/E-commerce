import React from 'react'
import { CurrencyRupeeOutlined, Add, Remove } from '@mui/icons-material'
import './cartcomponent.css'

const Cartcomponent = () => {
    return (
        <div className="cartproduct">
            <div className="cartproduct__image">
                <img src="http://localhost:8000/asset/image/product/pumashoe.jpeg" alt="" />
            </div>
            <div className='cartproduct__detailbox'>
                <span className='cartproduct__name'>Titan M5</span>
                <span className='cartproduct__price'><CurrencyRupeeOutlined /> 999</span>
            </div>
            <div className="cartproduct__quantitybox">
                <div className="cartproduct__quantitybutton flex-x-y"><Remove /></div>
                <div>2</div>
                <div className="cartproduct__quantitybutton flex-x-y"><Add /></div>
            </div>

            <div className="cartproduct__pricebox"><CurrencyRupeeOutlined />999</div>
            <div className='cartproduct__removebutton'>Remove</div>
        </div>
    )
}

export default Cartcomponent