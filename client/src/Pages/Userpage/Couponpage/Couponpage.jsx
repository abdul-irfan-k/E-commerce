import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Profilecontainer from '../../../components/User/Profilecontainer/Profilecontainer'

const Couponpage = () => {
  console.log('couponpage')
  return (
    <div>
        <Navbar />
        <Profilecontainer  page={'coupon'} />
    </div>
  )
}

export default Couponpage