import React from 'react'
import './viewcustomizationcomponent.css'
import { ViewListRounded, ViewModuleRounded, KeyboardArrowDownRounded, SearchRounded } from '@mui/icons-material'

const Viewcustomizationcomponent = () => {
    return (
        <>
            <div className='view-c__viewselection'>
                <div className='flex-x-y'><ViewModuleRounded /></div>
                <div className='flex-x-y'><ViewListRounded /></div>
            </div>
            <div className='view-c__sortselection'>
                <div>sort by</div>
                <div className='flex-x-y'><KeyboardArrowDownRounded /></div>
            </div>
            <div className='view-c__searchbox'>
                <input type="text" placeholder='search' />
                <div className='flex-x-y'><SearchRounded /></div>
            </div>
        </>
    )
}

export default Viewcustomizationcomponent