import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Signupcomponent from '../../components/Authentication/Signup/Signupcomponent'
import UserVerification from '../../components/Authentication/userVerification/UserVerification'
import Profileimagecomponent from '../../components/User/Profileimage/Profileimagecomponent'

const Signuppage = () => {
    return (
        <div>
            <Navbar />
            <Signupcomponent />
            {/* <UserVerification /> */}
            {/* <Profileimagecomponent /> */}
        </div>
    )
}

export default Signuppage
