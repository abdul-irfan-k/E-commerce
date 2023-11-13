import React from 'react'
import './productfaqcomponent.css'

const Productfaqcomponent = () => {
    return (
        <div className='productfaq'>
            <div className="productfaq__header">Questions & Answers</div>
            <div className="productfaq__content">
                <div className='productfaq__questionbox'>
                    <span>Q: shall i use this for running and other sports events? </span>
                    <span>A: yes you can use for running and other sports events  </span>
                </div>
                <div className='productfaq__questionbox'>
                    <span>Q: is there waranty provided or not? </span>
                    <span>A: they provide waranty for 12months   </span>
                </div>
            </div>
        </div>
    )
}

export default Productfaqcomponent