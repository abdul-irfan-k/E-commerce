import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Adminmenucomponent from '../../../components/Admin/Adminmenu/Adminmenucomponent'
import Productlistcomponent from '../../../components/Admin/Productlist/Productlistcomponent'

const Productlistpage = () => {
  return (
    <div>
        <Navbar />
        <Adminmenucomponent />
        <Productlistcomponent />
    </div>
  )
}

export default Productlistpage