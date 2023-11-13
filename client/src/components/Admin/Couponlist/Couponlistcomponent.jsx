import React from 'react'
import './Couponlistcomponent.css'
import Viewcustomizationcomponent from '../Viewcustomizaton/Viewcustomizationcomponent'
import Paginationcomponent from '../Pagination/Paginationcomponent'

const Couponlistcomponent = () => {
    const a = ['','','','','']
  return (
    <div className='couponlist-c'>
    <div className='couponlist-c__headerbox'>
        <div className='couponlist-c__header'>
            Delivery
        </div>
        <Viewcustomizationcomponent />
    </div>

    <div className='table-c'>
        <div className='table-c__headerrow' style={{ gridTemplateColumns: '2fr 3fr 2fr 2fr 1fr 4fr' }}>
            <div className='table-c__headercolumn'>Code</div>
            <div className='table-c__headercolumn'>Image</div>
            <div className='table-c__headercolumn'>Starting Date</div>
            <div className='table-c__headercolumn'>Exprie Date</div>
            <div className='table-c__headercolumn'>Offer</div>
            <div className='table-c__headercolumn'>Mode</div>
        </div>
        {a.map((erm) => {
            return <div className='table-c__rowbox' style={{ gridTemplateColumns: '2fr 3fr 2fr 2fr 1fr 4fr' }}>
                <div className='table-c__rowcolumn'>RS100 </div>
                <div className='table-c__rowcolumnimage'><img src="http://localhost:8000/asset/image/banner/watchbanner.jpeg" alt="" /> </div>
                <div className='table-c__rowcolumn'>10/12/2022 </div>
                <div className='table-c__rowcolumn'>03/05/2323 </div>
                <div className='table-c__rowcolumn'>10%</div>
                <div className='table-c__rowcolumnbuttonbox'>
                    <div className='table-c__rowcolumnbutton'>Edit</div>
                    <div className='table-c__rowcolumnbutton'>Delete</div>
                </div>
            </div>
        })}
    </div>

    <div className='couponlist-c__pagination'>
        <Paginationcomponent />
    </div>
</div>
  )
}

export default Couponlistcomponent