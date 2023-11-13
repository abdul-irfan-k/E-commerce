import React from 'react'
import axios from 'axios'
import { createButton } from 'react-social-login-buttons'
import { LoginSocialLinkedin } from 'reactjs-social-login'
import './customauthentication.css'

const Linkedinauthentication = () => {
  const LinkedInLoginButton = createButton({
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

  const linkedinLoginResolve = async({ data }) => {
    try {
      const res = await axios.post('http://localhost:8000/loginWithLinkedIn', { code: data.code })
      console.log(res.data)
    } catch (error) {
      console.log('api error of the linkedin ', error)
    }
  }
  const linkedinLoginReject = (err) => {
    console.log('err', err)
  }
  return (
    <div className='loginbox__customloginbox-box' >
      <LoginSocialLinkedin
        client_id='86v08901xpwgyv'
        onReject={linkedinLoginReject}
        onResolve={linkedinLoginResolve}
        isOnlyGetCode={true}
        redirect_uri={`${window.location.origin}/linkedin`}
        scope='r_emailaddress'
      >
        <LinkedInLoginButton style={{ background: 'url(/Asset/images/appimage/linkedin.png)', backgroundSize: '100% 100%' }}></LinkedInLoginButton>
      </LoginSocialLinkedin>
    </div >
  )
}

export default Linkedinauthentication
