import React from 'react'
import './Paginationcomponent.css'

const Paginationcomponent = () => {
    return (
        <div className='tablepagination'>
            <div className='tablepagination__previousnum flex-x-y bg-lightpurple'>1</div>
            <div className='tablepagination__currentnum flex-x-y bg-yellow'>2</div>
            <div className='tablepagination__nextnum flex-x-y bg-lightpurple'>3</div>
            <div className='tablepagination__maxnum flex-x-y bg-lightpurple'>11</div>
        </div>
    )
}

export default Paginationcomponent