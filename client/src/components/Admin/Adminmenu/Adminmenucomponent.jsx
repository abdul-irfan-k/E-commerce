import React from 'react'
import './adminmenucomponent.css'
import { ExpandMoreRounded } from '@mui/icons-material'
import {useNavigate} from 'react-router-dom'

const Adminmenucomponent = () => {
    const navigate = useNavigate()

    return (
        <div className='adminmenu-c'>
            <div className='adminmenu-c__header'>Dashboard</div>
            <div className='adminmenu-c__menu'>
                <div className='adminmenu-c__menuitem'>
                    <div>Banner</div>
                    <div className='flex-x-y'><ExpandMoreRounded /></div>
                </div>
                <div className='adminmenu-c__menuitem'>
                    <div>Category</div>
                    <div className='flex-x-y'><ExpandMoreRounded /></div>
                </div>
                <div className='adminmenu-c__menuitem'>
                    <div>Product</div>
                    <div className='flex-x-y'><ExpandMoreRounded /></div>
                </div>
                <div className='adminmenu-c__menuitem'>
                    <div>Coupon</div>
                    <div className='flex-x-y'><ExpandMoreRounded /></div>
                </div>
                <div className='adminmenu-c__menuitem'>
                    <div>Special Offer</div>
                    <div className='flex-x-y'><ExpandMoreRounded /></div>
                </div>
                <div className='adminmenu-c__menuitem'>
                    <div>Review & Rating</div>
                    <div className='flex-x-y'><ExpandMoreRounded /></div>
                </div>
                <div className='adminmenu-c__menuitem'>
                    <div>Delivery</div>
                    <div className='flex-x-y'><ExpandMoreRounded /></div>
                </div>
                <div className='adminmenu-c__menuitem'>
                    <div>Dark theme </div>
                    <div className='flex-x-y'><ExpandMoreRounded /></div>
                </div>

            </div>
        </div>
    )
}

export default Adminmenucomponent