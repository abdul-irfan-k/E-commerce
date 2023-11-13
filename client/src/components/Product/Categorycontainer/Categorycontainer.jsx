import React from 'react'
import './categorycontainer.css'
import Categorycomponent from '../Category/Categorycomponent'

const Categorycontainer = () => {
    return (
        <div className='category-c'>
            <div className='category-c__header'>Category</div>
            <div className='category-c__body'>
                <Categorycomponent />
                <Categorycomponent />
                <Categorycomponent />
                <Categorycomponent />
                <Categorycomponent />
                <Categorycomponent />
            </div>
            <div></div>
        </div>
    )
}

export default Categorycontainer