import React from 'react'
import './halfbannercomponent.css'

const Halfbannercomponent = ({ num }) => {
    return (
        <div className='halfbanner'>
            {num != 1 ?
                <img src="http://localhost:8000/asset/image/banner/watchbanner.jpeg" alt="" /> :
                <img src="http://localhost:8000/asset/image/banner/banner.jpg" alt="" />
            }
        </div>
    )
}

export default Halfbannercomponent