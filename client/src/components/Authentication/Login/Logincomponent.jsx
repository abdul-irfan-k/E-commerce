import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './logincomponent.css'
import GoogleAuthentication from '../Customauthentication/GoogleAuthentication'
import FacebookAuthentication from '../Customauthentication/FacebookAuthentication'
import Linkedinauthentication from '../Customauthentication/Linkedinauthentication'
import Githubauthentication from '../Customauthentication/Githubauthentication'
import TwitterAuthentication from '../Customauthentication/TwitterAuthentication'
import { loginHandler } from '../../../actions/userActions'


const Logincomponent = () => {
    const dispatch = useDispatch()
    const [userDetail, setUserDetail] = useState({ username: '', email: '', phone: '', password: '', confirmPassword: '' })
    const data = useSelector(state => state.user.user)

    const inputHandler = (e) => setUserDetail({ ...userDetail, [e.target.name]: e.target.value })
    const loginButtonHandler = () => {
        dispatch(loginHandler(userDetail))
    }

    return (
        <div className='loginbox'>
            <h1>Sign Up</h1>
            <div className="loginbox__inputbox">
                <div className="loginbox__inputbox-box">
                    <div>Email</div>
                    <input name='email' type="text" onChange={inputHandler} placeholder='Enter email or phone' />
                </div>
                <div className="loginbox__inputbox-box">
                    <div>Password </div>
                    <input name='password' type="text" onChange={inputHandler} placeholder='Enter password' />
                </div>
            </div>
            <div className='loginbox__button button-blue flex-x-y' onClick={loginButtonHandler}>Sign Up</div>
            <span>You already have an account <span className='font-blue'>Login Here </span></span>


            <p className='loginbox__customloginbox-header'>
                Sign up with
            </p>
            <div className="loginbox__customloginbox">
                <GoogleAuthentication />
                <FacebookAuthentication />
                <Linkedinauthentication />
                <Githubauthentication />
                <TwitterAuthentication />
            </div>
        </div>
    )
}

export default Logincomponent
