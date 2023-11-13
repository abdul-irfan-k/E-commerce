import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Adminmenucomponent from '../../../components/Admin/Adminmenu/Adminmenucomponent'
import Reviewcomponent from '../../../components/Admin/Review/Reviewcomponent'

const Reviewpage = () => {
  return (
    <div>
        <Navbar />
        <Adminmenucomponent />
        <Reviewcomponent />
    </div>
  )
}

export default Reviewpage