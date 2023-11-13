import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Adminmenucomponent from '../../../components/Admin/Adminmenu/Adminmenucomponent'
import Productaddcomponent from '../../../components/Admin/Productadd/Productaddcomponent'

const Productaddpage = () => {
  return (
    <div>
        <Navbar />
        <Adminmenucomponent />
        <Productaddcomponent />
    </div>
  )
}

export default Productaddpage