import React from 'react'
import { LoginSocialFacebook } from 'reactjs-social-login'
import { createButton } from 'react-social-login-buttons'
import './customauthentication.css'

const FacebookAuthentication = () => {
    const FacebookLoginButton = createButton({
        icon: "facebook",
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

            <LoginSocialFacebook
                appId='786067386078785'
                onResolve={(response) => console.log("res", response)}
                onReject={(err) => console.log("rej", err)}
            >
                <FacebookLoginButton style={{ background: 'url(/Asset/images/appimage/facebook.png)', backgroundSize: '100% 100%' }}></FacebookLoginButton>
            </LoginSocialFacebook>
        </div>
    )
}

export default FacebookAuthentication
