import React from 'react'
import './productrowcomponent.css'
import { StarHalf, CurrencyRupeeOutlined } from '@mui/icons-material'

const Productrowcomponent = () => {
  return (
    <div className='productrowcard'>
      <div className='productrowcard__image'>
        <img src="http://localhost:8000/asset/image/product/pumashoe.jpeg" alt="" />
      </div>
      <div className='productrowcard__details'>
        <div className='productrowcard__rating'><StarHalf /> 4.1</div>
        <div className='productrowcard__name'>Acer Aspire 3</div>
        <div className='productrowcard__title'>Glory sneakers for men</div>
      </div>
      <div className='productrowcard__price'><CurrencyRupeeOutlined /> 35999</div>
      <div className='productrowcard__addtocartbutton'>Add to Cart</div>
    </div>
  )
}

export default Productrowcomponent