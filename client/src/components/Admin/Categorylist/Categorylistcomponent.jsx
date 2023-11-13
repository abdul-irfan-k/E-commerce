import React from 'react'
import '../Table/table.css'
import './Categorylistcomponent.css'
import Viewcustomizationcomponent from '../Viewcustomizaton/Viewcustomizationcomponent'
import Paginationcomponent from '../Pagination/Paginationcomponent'

const Categorylistcomponent = () => {
    const a = ['','','','','']
    return (
        <div className='categorylist-c'>
            <div className='categorylist-c__headerbox'>
                <div className='categorylist-c__header'>
                    Category
                </div>
                <Viewcustomizationcomponent />
            </div>
            <div className='table-c'>
                <div className='table-c__headerrow' style={{ gridTemplateColumns: '3fr 4fr 2fr 3fr' }}>
                    <div className='table-c__headercolumn'>Name</div>
                    <div className='table-c__headercolumn'>Image</div>
                    <div className='table-c__headercolumn'>Offer</div>
                    <div className='table-c__headercolumn'>Mode</div>
                </div>
                {a.map((erm) => {
                    return <div className='table-c__rowbox' style={{ gridTemplateColumns: '3fr 4fr 2fr 3fr' }}>
                        <div className='table-c__rowcolumn'>Watch</div>
                        <div className='table-c__rowcolumnimage'><img src="http://localhost:8000/asset/image/banner/watchbanner.jpeg" alt="" /> </div>
                        <div className='table-c__rowcolumn'>10% </div>
                        <div className='table-c__rowcolumnbuttonbox'>
                            <div className='table-c__rowcolumnbutton'>Edit</div>
                            <div className='table-c__rowcolumnbutton'>Delete</div>
                        </div>
                    </div>
                })}
            </div>

            <div className='categorylist-c__pagination'>
                <Paginationcomponent />
            </div>

        </div>
    )
}

export default Categorylistcomponent