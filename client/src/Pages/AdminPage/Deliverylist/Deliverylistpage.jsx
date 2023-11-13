import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Adminmenucomponent from '../../../components/Admin/Adminmenu/Adminmenucomponent'
import Deliverylistcomponent from '../../../components/Admin/Deliverylist/Deliverylistcomponent'

const Deliverylistpage = () => {
    return (
        <div>
            <Navbar />
            <Adminmenucomponent />
            <Deliverylistcomponent />
        </div>
    )
}

export default Deliverylistpage