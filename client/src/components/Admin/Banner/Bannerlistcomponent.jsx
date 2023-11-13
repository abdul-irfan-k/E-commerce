import React from 'react'
import './Bannerlistcomponent.css'
import Viewcustomizationcomponent from '../Viewcustomizaton/Viewcustomizationcomponent'
import Paginationcomponent from '../Pagination/Paginationcomponent'
const Bannerlistcomponent = () => {
    const a = ['', '', '', '', '']
    return (
        <div className='bannerlist-c'>
            <div className='bannerlist-c__headerbox'>
                <div className='bannerlist-c__header'>Banner</div>
                <Viewcustomizationcomponent />
            </div>


            <div className='bannertable-c'>
                <div className='bannertable-c__headerrow' >
                    <div className='bannertable-c__headercolumn'>Category</div>
                    <div className='bannertable-c__headercolumn'>Image</div>
                    <div className='bannertable-c__headercolumn'>Mode</div>
                </div>

                {a.map((erm) => {
                    return <div className='bannertable-c__rowbox'>
                        <div className='bannertable-c__rowcolumn'>Watch </div>
                        <div className='bannertable-c__rowcolumnimage'><img src="http://localhost:8000/asset/image/banner/watchbanner.jpeg" alt="" /> </div>
                        <div className='bannertable-c__rowcolumnbuttonbox'>
                            <div className='bannertable-c__rowcolumnbutton'>Edit</div>
                            <div className='bannertable-c__rowcolumnbutton'>Delete</div>
                        </div>
                    </div>
                })}
            </div>

            <div className='bannerlist-c__pagination'>
                <Paginationcomponent />
            </div>
        </div>
    )
}

export default Bannerlistcomponent