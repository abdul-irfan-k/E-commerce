import React from 'react'
import Halfbannercomponent from '../HalfBanner/Halfbannercomponent'

const Halfbannercontainer = () => {
    return (
        <div className='halfbanner-c'>
            <Halfbannercomponent num={1} />
            <Halfbannercomponent  />
        </div>
    )
}

export default Halfbannercontainer