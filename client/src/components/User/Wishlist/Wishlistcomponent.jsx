import React, { useState } from 'react'
import './whishlist.css'
import { ViewListRounded, ViewModuleRounded, KeyboardArrowDownRounded, SearchRounded } from '@mui/icons-material'
import Productrowcomponent from '../../Product/Productrow/Productrowcomponent'
import Productcomponent from '../../Product/Product/Productcomponent'

const Wishlistcomponent = () => {
    const [isRowView, setIsRowView] = useState(false)
    return (
        <div className='wishlist-c'>
            <div className="wishlist-c__headerbox">
                <div className='wishlist-c__header'>Wishlist</div>
                <div className='wishlist-c__viewselection'>
                    <div className={`flex-x-y${isRowView ? ' font-lightdark' : ''}`}><ViewModuleRounded onClick={() => setIsRowView(false)} /></div>
                    <div className={`flex-x-y${!isRowView ? ' font-lightdark' : ''}`}><ViewListRounded onClick={() => setIsRowView(true)} /></div>
                </div>
                <div className='wishlist-c__sortselection'>
                    <span>sort by</span>
                    <span><KeyboardArrowDownRounded /></span>
                </div>
                <div className='wishlist-c__searchbox'>
                    <input type="text" placeholder='search' />
                    <span><SearchRounded /></span>
                </div>
            </div>


            {isRowView ?
                <div className='wishlist-c__productrow'>
                    <Productrowcomponent />
                    <Productrowcomponent />
                    <Productrowcomponent />
                    <Productrowcomponent />
                    <Productrowcomponent />
                </div> :
                <div className='wishlist-c__productcolumnbox'>
                    <Productcomponent />
                    <Productcomponent />
                    <Productcomponent />
                    <Productcomponent />
                    <Productcomponent />
                </div>}

        </div>
    )
}

export default Wishlistcomponent