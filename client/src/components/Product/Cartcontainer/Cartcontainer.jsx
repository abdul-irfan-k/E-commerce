import React from 'react'
import { CurrencyRupeeOutlined } from '@mui/icons-material'
import './cartcontainer.css'
import Cartcomponent from '../Cart/Cartcomponent'

const Cartcontainer = () => {
  return (
    <div className='cart-c'>
      <div className="cart-c__productbox">
        <Cartcomponent />
        <Cartcomponent />
        <Cartcomponent />


      </div>
      <div className="cart-c__checkoutbox">
        <div className='cart-c__checkoutbox__header'>Proceed to checkout</div>
        <p>Radeem coupon</p>
        <div className='cart-c__checkoutbox__radeembox'>
          <input type="text" className='cart-c__checkoutbox__radeeminput' />
          <div className='cart-c__checkoutbox__radeembutton flex-x-y'>Radeem</div>
        </div>
        <div className='cart-c__checkoutbox__pricedetail'>
          <div className='cart-c__checkoutbox__pricebox'>
            <span>Total Item</span>
            <span> 5</span>
          </div>
          <div className='cart-c__checkoutbox__pricebox'>
            <span>Price</span>
            <span><CurrencyRupeeOutlined />24999</span>
          </div>
          <div className='cart-c__checkoutbox__pricebox'>
            <span>Discount Price</span>
            <span><CurrencyRupeeOutlined />1499</span>
          </div>
          <div className='cart-c__checkoutbox__line'></div>
          <div className='cart-c__checkoutbox__pricebox'>
            <span>Total Price</span>
            <span><CurrencyRupeeOutlined />20999</span>
          </div>
        </div>
        <div className='cart-c__checkoutbox__button flex-x-y'>Checkout</div>
      </div>
    </div>
  )
}

export default Cartcontainer