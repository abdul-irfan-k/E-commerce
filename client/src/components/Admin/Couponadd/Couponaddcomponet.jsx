import React from 'react'
import './couponaddcomponet.css'

const Couponaddcomponet = () => {
    return (
        <div className='couponadd-c'>
            <div className='couponadd-c__header'>Coupon</div>
            <div className='couponadd-c__inputbox'>
                <div className='couponadd-c__inputimage'></div>
                <div className='couponadd-c__inputtitle'>
                    <div>Coupon Code</div>
                    <input type="text" />
                </div>
                <div className='couponadd-c__inputtitle'>
                    <div>Offer</div>
                    <input type="text" />
                </div>
                <div className='couponadd-c__inputtitle'>
                    <div>Max Offer</div>
                    <input type="text" />
                </div>
                <div className='couponadd-c__inputtitle'>
                    <div>Starting Price</div>
                    <input type="text" />
                </div>
                <div className='couponadd-c__inputtitle'>
                    <div>Starting Date</div>
                    <input type="text" />
                </div>
                <div className='couponadd-c__inputtitle'>
                    <div>Expire Date</div>
                    <input type="text" />
                </div>
                <div className='couponadd-c__submitbutton bg-yellow flex-x-y'>Submit</div>
            </div>
        </div>
    )
}

export default Couponaddcomponet