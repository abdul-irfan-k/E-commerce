import React from 'react'
import '../Table/table.css'
import './productlistcomponent.css'
import Viewcustomizationcomponent from '../Viewcustomizaton/Viewcustomizationcomponent'
import Paginationcomponent from '../Pagination/Paginationcomponent'

const Productlistcomponent = () => {
    const a = ['', '', '', '', '']
    return (
        <div className='productlist-c'>
            <div className='productlist-c__headerbox'>
                <div className='productlist-c__header'>
                    Product
                </div>
                <Viewcustomizationcomponent />
            </div>

            <div className='table-c'>
                <div className='table-c__headerrow' style={{ gridTemplateColumns: '3fr 4fr 2fr 2fr 2fr 4fr' }}>
                    <div className='table-c__headercolumn'>Name</div>
                    <div className='table-c__headercolumn'>Image</div>
                    <div className='table-c__headercolumn'>Category</div>
                    <div className='table-c__headercolumn'>Stock</div>
                    <div className='table-c__headercolumn'>Price</div>
                    <div className='table-c__headercolumn'>Mode</div>
                </div>
                {a.map((erm) => {
                    return <div className='table-c__rowbox' style={{ gridTemplateColumns: '3fr 4fr 2fr 2fr 2fr 4fr' }}>
                        <div className='table-c__rowcolumn'>Asus zen 4 </div>
                        <div className='table-c__rowcolumnimage'><img src="http://localhost:8000/asset/image/banner/watchbanner.jpeg" alt="" /> </div>
                        <div className='table-c__rowcolumn'>Watch </div>
                        <div className='table-c__rowcolumn'>40 </div>
                        <div className='table-c__rowcolumn'>2499 </div>
                        <div className='table-c__rowcolumnbuttonbox'>
                            <div className='table-c__rowcolumnbutton'>Edit</div>
                            <div className='table-c__rowcolumnbutton'>Delete</div>
                        </div>
                    </div>
                })}
            </div>

            <div className='productlist-c__pagination'>
                <Paginationcomponent />
            </div>

        </div>
    )
}

export default Productlistcomponent