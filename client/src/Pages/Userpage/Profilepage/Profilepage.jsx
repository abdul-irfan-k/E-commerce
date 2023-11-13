import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Profilecontainer from '../../../components/User/Profilecontainer/Profilecontainer'

const Profilepage = () => {
  return (
    <div>
        <Navbar />
        <Profilecontainer  page={'profile'} />
    </div>
  )
}

export default Profilepage