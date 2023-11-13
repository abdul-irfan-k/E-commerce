import React, { useRef, useState } from 'react'
import './userVerification.css'
import Otpcomponent from '../Otp/Otpcomponent'

const UserVerification = () => {
    const [verificationType, setVerificationType] = useState('')
    const [isOpenOtpForm, setIsOpenOtpForm] = useState(true)
    const phoneRef = useRef()
    const cancelButtonHandler = () => { }
    const nextButtonHandler = () => {
        setIsOpenOtpForm(true)
    }


    return (
        <>
            {!isOpenOtpForm &&
                <div className='userverification'>
                    <h1 className='userverification__header'>Verify Account</h1>
                    <div className='userverification__inputcontainer'>
                        <div className='userverification__inputbox' onClick={() => setVerificationType('phone')}>
                            <span></span>
                            <span>phone</span>
                            <input type="radio" ref={phoneRef} checked={verificationType === "phone"} />
                        </div>
                        <div className='userverification__inputbox' onClick={() => setVerificationType('email')}>
                            <span></span>
                            <span>E mail</span>
                            <input type="radio" checked={verificationType === "email"} />
                        </div>
                    </div>
                    <div className='userverification__buttonbox'>
                        <div className='button-blue flex-x-y button--danger' onClick={cancelButtonHandler}>cancel</div>
                        <div className='button-blue flex-x-y button-blue' onClick={nextButtonHandler}>next</div>
                    </div>
                </div>
            }
            {
                isOpenOtpForm && <Otpcomponent verificationType='phone' verificationDetail='' />
            }
        </>
    )
}

export default UserVerification
