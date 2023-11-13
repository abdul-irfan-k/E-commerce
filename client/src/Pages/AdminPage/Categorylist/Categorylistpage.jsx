import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Adminmenucomponent from '../../../components/Admin/Adminmenu/Adminmenucomponent'
import Categorylistcomponent from '../../../components/Admin/Categorylist/Categorylistcomponent'

const Categorylistpage = () => {
    return (
        <div>
            <Navbar />
            <Adminmenucomponent />
            <Categorylistcomponent />
        </div>
    )
}

export default Categorylistpage