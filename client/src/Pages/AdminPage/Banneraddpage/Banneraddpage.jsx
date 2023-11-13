import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Adminmenucomponent from '../../../components/Admin/Adminmenu/Adminmenucomponent'
import Banneraddcomponent from '../../../components/Admin/Banneradd/Banneraddcomponent'
import { useLocation } from 'react-router'

const Banneraddpage = () => {
    return (
        <div>
            <Navbar />
            <Adminmenucomponent />
            <Banneraddcomponent />
        </div>
    )
}

export default Banneraddpage