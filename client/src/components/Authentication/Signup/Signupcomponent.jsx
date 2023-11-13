import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import './SignUpcomponent.css'
import { signUpHandler } from '../../../actions/userActions'

const Signupcomponent = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [userDetail, setUserDetail] = useState({ username: '', email: '', phone: '', password: '', confirmPassword: '' })

    const inputHandler = (e) => setUserDetail({ ...userDetail, [e.target.name]: e.target.value })
    const loginLinkClickHandler = () => navigate('/login')
    const submitButtonHandler = () => {
        dispatch(signUpHandler(userDetail))
    }

    return (
        <div className='loginbox'>
            <h1>Sign Up</h1>
            <div className="loginbox__inputbox">
                <div className="loginbox__inputbox-box">
                    <div>Name</div>
                    <input name='username' type="text" onChange={inputHandler} />
                </div>
                <div className="loginbox__inputbox-box">
                    <div>Email</div>
                    <input name='email' type="email" onChange={inputHandler} />
                </div>
                <div className="loginbox__inputbox-box ">
                    <div>Phone</div>
                    <input name='phone' type="number" onChange={inputHandler} />
                </div>
                <div className="loginbox__inputbox-box">
                    <div>Password </div>
                    <input name='password' type="password" onChange={inputHandler} />
                </div>
                <div className="loginbox__inputbox-box">
                    <div>Comfirm Password</div>
                    <input name='comfirmPassword' type="password" onChange={inputHandler} />
                </div>
            </div>
            <div className='loginbox__button button-blue flex-x-y' onClick={submitButtonHandler}>Submit</div>
            <span>You already have an account <span className='font-blue' onClick={loginLinkClickHandler}>Login Here </span></span>
        </div>
    )
}

export default Signupcomponent
