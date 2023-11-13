import React, { useCallback, useEffect, useRef, useState } from 'react'
import './otpcomponent.css'

const Otpcomponent = () => {
    const inputRef = useRef([])
    const [otp, setOtp] = useState({ otp1: '', otp2: '', otp3: '', otp4: '', otp5: '', otp6: '' })
    

    useEffect(() => {
        inputRef[1].focus()
    }, [])
    const submitHandler = () => {
        console.log(otp)
    }

    const inputHandler = (e) => {
        setOtp({ ...otp, ['otp' + e.target.name]: e.target.value })
    }

    const inputFocusHandler = (e) => {
        if (e.key === "Delete" || e.key === "Backspace" || e.key === 'ArrowLeft') {
            if (parseInt(e.target.name) - 1 > 0) inputRef[parseInt(e.target.name) - 1].focus()
        }

        else {
            if (e.key >= '0' && e.key <= '9') setOtp({ ...otp, ['otp' + e.target.name]: e.key })
            if (parseInt(e.target.name) + 1 < 7) inputRef[parseInt(e.target.name) + 1].focus()
        }
    }

    return (
        <div className='userverification'>
            <h1 className='userverification__header'>Verify Account</h1>
            <p>OTP sended to irfan@gmail.com</p>
            <div className="otpbox">
                <span>OTP</span>
                <div className="otpverification__inputbox">
                    <input type="text" maxLength={1} name='1' value={otp.otp1} ref={(val) => inputRef[1] = val} onChange={(e) => inputHandler(e, 1)} onKeyUp={inputFocusHandler} />
                    <input type="text" maxLength={1} name='2' value={otp.otp2} ref={(val) => inputRef[2] = val} onChange={(e) => inputHandler(e, 2)} onKeyUp={inputFocusHandler} />
                    <input type="text" maxLength={1} name='3' value={otp.otp3} ref={(val) => inputRef[3] = val} onChange={(e) => inputHandler(e, 3)} onKeyUp={inputFocusHandler} />
                    <input type="text" maxLength={1} name='4' value={otp.otp4} ref={(val) => inputRef[4] = val} onChange={(e) => inputHandler(e, 4)} onKeyUp={inputFocusHandler} />
                    <input type="text" maxLength={1} name='5' value={otp.otp5} ref={(val) => inputRef[5] = val} onChange={(e) => inputHandler(e, 5)} onKeyUp={inputFocusHandler} />
                    <input type="text" maxLength={1} name='6' value={otp.otp6} ref={(val) => inputRef[6] = val} onChange={(e) => inputHandler(e, 6)} onKeyUp={inputFocusHandler} />
                </div>
            </div>
            <div className='loginbox__button button-blue flex-x-y mt-30' onClick={submitHandler}>Submit</div>
        </div>
    )
}

export default Otpcomponent
