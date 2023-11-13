import React from 'react'
import axios from 'axios'
import './customauthentication.css'
import { LoginSocialTwitter } from 'reactjs-social-login';
import { createButton } from 'react-social-login-buttons';

const TwitterAuthentication = () => {
    const TwitterLoginButton = createButton({
        icon: "github",
        style: {
            margin: 0,
            border: 0,
            padding: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%'
        },
    });

    const twitterLoginResolve = async ({ data }) => {
        try {
            const res = await axios.post('http://localhost:8000/loginWithTwitter', { code: data.code })
            console.log('res ', res.data)
        } catch (error) {
            console.log('err', error)
        }
    }

    return (
        <div className='loginbox__customloginbox-box'>
            <LoginSocialTwitter
                client_id='QVpzVDRUUU5VYVRzem1aVGdRdFE6MTpjaQ'
                isOnlyGetCode={true}
                onReject={(err) => console.log('err', err)}
                onResolve={twitterLoginResolve}
                redirect_uri='http://localhost:3000/twitter'
                scope='tweet.read%20users.read%20follows.read%20follows.write'
                state='state'
            >
                <TwitterLoginButton style={{ background: 'url(/Asset/images/appimage/twitter.png)', backgroundSize: '100% 100%' }} />
            </LoginSocialTwitter>
        </div>
    )
}

export default TwitterAuthentication
