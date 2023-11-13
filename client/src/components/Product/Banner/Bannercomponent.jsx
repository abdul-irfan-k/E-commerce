import React from 'react'
import './bannercomponent.css'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'

const Bannercomponent = () => {
  const rightSlideButtonHandler = () => {

  }
  const leftSlideButtonHandler = () => {

  }
  return (
    <div className='banner__container'>
      <div className="banner__box-bannerbox">
        <div className="banner__box-imagebox">
          <img src="http://localhost:8000/asset/image/banner/watchbanner.jpeg" alt="" />
        </div>

        <div className="banner__box-content">
        </div>
      </div>

      <div className="banner__container-slidedetailer flex-x-y">
        <div className="banner__container-slidedetailer-box banner__container-slidedetailer-box-active"></div>
        <div className="banner__container-slidedetailer-box"></div>
        <div className="banner__container-slidedetailer-box"></div>
      </div>
      <div className="banner__container-slidebtnbox left-box flex-x-y" >
        <KeyboardArrowLeft onClick={leftSlideButtonHandler} />
      </div>
      <div className="banner__container-slidebtnbox right-box flex-x-y">
        <KeyboardArrowRight onClick={rightSlideButtonHandler} />
      </div>
    </div>
  )
}

export default Bannercomponent
