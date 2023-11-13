import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Profilecontainer from '../../../components/User/Profilecontainer/Profilecontainer'

const Wishlistpage = () => {
  return (
    <div>
      <Navbar />
      <Profilecontainer page={'wishlist'} />
    </div>
  )
}

export default Wishlistpage