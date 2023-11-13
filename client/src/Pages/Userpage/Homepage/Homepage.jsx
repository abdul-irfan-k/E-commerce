import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Bannercomponent from '../../../components/Product/Banner/Bannercomponent'
import Productscontainer from '../../../components/Product/Productscontainer/Productscontainer'
import Categorycontainer from '../../../components/Product/Categorycontainer/Categorycontainer'
import Halfbannercontainer from '../../../components/Product/Halfbannercontainer/Halfbannercontainer'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Bannercomponent />
      <Productscontainer />
      <Categorycontainer />
      <Halfbannercontainer />
    </div>
  )
}

export default Homepage
