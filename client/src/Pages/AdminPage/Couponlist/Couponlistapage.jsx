import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Adminmenucomponent from '../../../components/Admin/Adminmenu/Adminmenucomponent'
import Couponlistcomponent from '../../../components/Admin/Couponlist/Couponlistcomponent'

const Couponlistapage = () => {
  return (
    <div>
        <Navbar />
        <Adminmenucomponent />
        <Couponlistcomponent />
    </div>
  )
}

export default Couponlistapage