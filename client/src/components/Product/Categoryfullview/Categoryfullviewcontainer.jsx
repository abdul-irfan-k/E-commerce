import React, { useState } from 'react'
import './categorycontainer.css'
import { ViewListRounded, ViewModuleRounded, KeyboardArrowDownRounded, SearchRounded } from '@mui/icons-material'
import Productrowcomponent from '../Productrow/Productrowcomponent'
import Productcomponent from '../Product/Productcomponent'
import Paginationcomponent from '../Pagination/Paginationcomponent'

const Categoryfullviewcontainer = () => {
    const [isRowView,setIsRowView] = useState(false)

    return (
        <div className='categorydetail-c'>
            <div className='categorydetail-c__filter'>
                <div className='categorydetail-c__categoryselection'>
                    <span>category</span>
                    <span>Watch <KeyboardArrowDownRounded /></span>
                </div>
                <div className='categorydetail-c__viewselection'>
                    <span ><ViewModuleRounded  onClick={() => setIsRowView(false)} /></span>
                    <span className='font-lightdark'><ViewListRounded  onClick={() => setIsRowView(true)} /></span>
                </div>
                <div className='categorydetail-c__sortselection'>
                    <span>sort by</span>
                    <span><KeyboardArrowDownRounded /></span>
                </div>
                <div className='categorydetail-c__searchbox'>
                    <input type="text" placeholder='search' />
                    <span><SearchRounded /></span>
                </div>
            </div>

            {isRowView ?
                <div className='categoryproductrow-c'>
                    <Productrowcomponent />
                    <Productrowcomponent />
                </div> :
                <div className='categoryproductcolumn-c'>
                    <Productcomponent />
                    <Productcomponent />
                    <Productcomponent />
                    <Productcomponent />
                </div>}

                <Paginationcomponent />
        </div>
    )
}

export default Categoryfullviewcontainer