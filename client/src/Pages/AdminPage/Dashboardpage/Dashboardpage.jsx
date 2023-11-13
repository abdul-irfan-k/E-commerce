import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Adminmenucomponent from '../../../components/Admin/Adminmenu/Adminmenucomponent'
import Dashboardcomponent from '../../../components/Admin/Dashboard/Dashboardcomponent'

const Dashboardpage = () => {
  return (
    <div>
        <Navbar />
        <Adminmenucomponent />
        <Dashboardcomponent />
    </div>
  )
}

export default Dashboardpage