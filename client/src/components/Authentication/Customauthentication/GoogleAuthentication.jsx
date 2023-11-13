import React from 'react'
import { createButton } from 'react-social-login-buttons'
import { LoginSocialGoogle } from 'reactjs-social-login'
import './customauthentication.css'

const GoogleAuthentication = () => {
    const GoogleLoginButton = createButton({
        icon: "google",
        style: {
            margin: 0,
            border: 0,
            padding: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%'
        },
    });
    return (
        <div className='loginbox__customloginbox-box'>
            <LoginSocialGoogle
        
                client_id='1032047586980-djcvj4ahkk01echih4icsc778an0tpa6.apps.googleusercontent.com'
                onResolve={(data) => console.log("resolve ", data)}
                onReject={(err) => console.log("rejct ", err)}
            >
                <GoogleLoginButton style={{ background: 'url(/Asset/images/appimage/google.png)', backgroundSize: '100% 100%' }}></GoogleLoginButton>
            </LoginSocialGoogle>
        </div>
    )
}

export default GoogleAuthentication