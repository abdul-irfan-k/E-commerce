import React from 'react'
import './paginationcomponent.css'

const Paginationcomponent = () => {
    return (
        <div className='pagination'>
            <div className='pagination__previousnum flex-x-y bg-whitespecial'>1</div>
            <div className='pagination__currentnum flex-x-y bg-blue'>2</div>
            <div className='pagination__nextnum flex-x-y bg-whitespecial'>3</div>
            <div className='pagination__maxnum flex-x-y bg-whitespecial'>11</div>
        </div>
    )
}

export default Paginationcomponent