import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Adminmenucomponent from '../../../components/Admin/Adminmenu/Adminmenucomponent'
import Bannerlistcomponent from '../../../components/Admin/Banner/Bannerlistcomponent'

const Bannerpage = () => {
  return (
    <div>
        <Navbar />
        <Adminmenucomponent />
        <Bannerlistcomponent />
    </div>
  )
}

export default Bannerpage