import React from 'react'
import axios from 'axios'
import { createButton } from 'react-social-login-buttons';
import { LoginSocialGithub } from 'reactjs-social-login'
import './customauthentication.css'

const Githubauthentication = () => {
    const GithubLoginButton = createButton({
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

    const githubLoginResolve = ({ data }) => {
        axios.post('http://localhost:8000/loginWithGithub', { code: data.code })
    }
    return (
        <div className='loginbox__customloginbox-box'>
            <LoginSocialGithub
                client_id='fcbfdc4d7388c31f8fb4'
                onReject={(err) => console.log("reject ", err)}
                onResolve={githubLoginResolve}
                redirect_uri='http://localhost:3000/github'
                isOnlyGetCode={true}
                scope='user'
            >
                <GithubLoginButton style={{ background: 'url(/Asset/images/appimage/github.png)', backgroundSize: '100% 100%' }} />
            </LoginSocialGithub>
        </div>
    )
}

export default Githubauthentication

