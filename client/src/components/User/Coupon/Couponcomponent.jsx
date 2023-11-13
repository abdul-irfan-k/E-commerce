import React from 'react'
import './couponcomponent.css'
import { CheckRounded, ClearRounded } from '@mui/icons-material'

const Couponcomponent = () => {
  return (
    <div className='coupon-c'>
      <div className='coupon-c__header'>Coupon</div>
      <div className='coupon-c__couponbox'>
        <div className='couponcard'>
          <div className='couponcard__statusicon flex-x-y'>
            <CheckRounded />
            {/* <ClearRounded /> */}
          </div>
          <div className='couponcard__image'>
            <img src="http://localhost:8000/asset/image/coupon/default.png" alt="" />
          </div>
          <div className='couponcard__name'>1500 rs Coupon </div>
          <div className='couponcard__expire'>
            <span>exp: 10/12/23</span>
            <span className='font-blue'>read more </span>
          </div>
        </div>
        <div className='couponcard'>
          <div className='couponcard__statusicon flex-x-y'>
            <CheckRounded />
            {/* <ClearRounded /> */}
          </div>
          <div className='couponcard__image'>
            <img src="http://localhost:8000/asset/image/coupon/default.png" alt="" />
          </div>
          <div className='couponcard__name'>1500 rs Coupon </div>
          <div className='couponcard__expire'>
            <span>exp: 10/12/23</span>
            <span className='font-blue'>read more </span>
          </div>
        </div>
        <div className='couponcard'>
          <div className='couponcard__statusicon flex-x-y'>
            <CheckRounded />
            {/* <ClearRounded /> */}
          </div>
          <div className='couponcard__image'>
            <img src="http://localhost:8000/asset/image/coupon/default.png" alt="" />
          </div>
          <div className='couponcard__name'>1500 rs Coupon </div>
          <div className='couponcard__expire'>
            <span>exp: 10/12/23</span>
            <span className='font-blue'>read more </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Couponcomponent