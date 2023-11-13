import React from 'react'
import '../Table/table.css'
import './deliverylistcomponent.css'
import Viewcustomizationcomponent from '../Viewcustomizaton/Viewcustomizationcomponent'
import Paginationcomponent from '../Pagination/Paginationcomponent'

const Deliverylistcomponent = () => {
    const a = ['', '', '', '', '']
    return (
        <div className='deliverylist-c'>
            <div className='deliverylist-c__headerbox'>
                <div className='deliverylist-c__header'>
                    Delivery
                </div>
                <Viewcustomizationcomponent />
            </div>

            <div className='table-c'>
                <div className='table-c__headerrow' style={{ gridTemplateColumns: '2fr 2fr 3fr 2fr 1fr 4fr' }}>
                    <div className='table-c__headercolumn'>Number</div>
                    <div className='table-c__headercolumn'>Product</div>
                    <div className='table-c__headercolumn'>Image</div>
                    <div className='table-c__headercolumn'>Status</div>
                    <div className='table-c__headercolumn'>Type</div>
                    <div className='table-c__headercolumn'>Mode</div>
                </div>
                {a.map((erm) => {
                    return <div className='table-c__rowbox' style={{ gridTemplateColumns: '2fr 2fr 3fr 2fr 1fr 4fr' }}>
                        <div className='table-c__rowcolumn'>axsies15761</div>
                        <div className='table-c__rowcolumn'>Asus Zen 4 </div>
                        <div className='table-c__rowcolumnimage'><img src="http://localhost:8000/asset/image/banner/watchbanner.jpeg" alt="" /> </div>
                        <div className='table-c__rowcolumn'>Not Delivered </div>
                        <div className='table-c__rowcolumn'>code </div>
                        <div className='table-c__rowcolumnbuttonbox'>
                            <div className='table-c__rowcolumnbutton'>Change status</div>
                        </div>
                    </div>
                })}
            </div>

            <div className='deliverylist-c__pagination'>
                <Paginationcomponent />
            </div>
        </div>
    )
}

export default Deliverylistcomponent