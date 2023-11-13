import React from 'react'
import './profilecontainer.css'
import { EditOutlined } from '@mui/icons-material'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Wishlistcomponent from '../Wishlist/Wishlistcomponent'
import Couponcomponent from '../Coupon/Couponcomponent'

const Profilecontainer = ({ page }) => {
    const navigate = useNavigate()

    return (
        <div className='profile-c'>
            <div className='profile-c__menubox'>
                <div className='profile-c__menuimage'>
                    <img src="http://localhost:8000/asset/image/user/default.jpeg" alt="" />
                </div>
                <div className='profile-c__menuusername flex-x-y' onClick={() => navigate('/profile')}>Irfan K</div>
                <div className='profile-c__menu'>
                    <div className='profile-c__menuselection'>Dark Mode</div>
                    <div className='profile-c__menuselection' onClick={() => navigate('/coupon')}>Coupon</div>
                    <div className='profile-c__menuselection' onClick={() => navigate('/wishlist')}>My Whishlist</div>
                    <div className='profile-c__menuselection' >Logoout</div>
                    <div className='profile-c__menuselection'>Delete Account</div>
                </div>
            </div>
            <div className="profile-c__rightbox">

                {page == 'profile' &&
                    <div className='profile-c__userdetailbox'>
                        <div className='profile-c__username'>
                            <div>Name</div>
                            <div>Irfan K</div>
                        </div>
                        <div className='profile-c__useremail'>
                            <div>Email</div>
                            <div>irfan@gmail.com</div>
                        </div>
                        <div className='profile-c__userphone'>
                            <div>Phone</div>
                            <div>123456789</div>
                        </div>
                        <div className='profile-c__usereditbutton '>Edit</div>



                        <div className='profile-c__usereadressbox'>
                            <div className='profile-c__useradress'>
                                <div className='profile-c__useradressname'>My Home</div>
                                <div className='profile-c__useradresslocation'>
                                    uppinangady, puttur thaluk
                                    Dashina Kannada
                                    Karnataka
                                </div>
                                <div className='profile-c__useradresspincode'>512345</div>
                                <div className='profile-c__useradresseditbutton'><EditOutlined /></div>
                            </div>

                            <div className='profile-c__useradress'>
                                <div className='profile-c__useradressname'>My Home</div>
                                <div className='profile-c__useradresslocation'>
                                    uppinangady, puttur thaluk
                                    Dashina Kannada
                                    Karnataka
                                </div>
                                <div className='profile-c__useradresspincode'>512345</div>
                                <div className='profile-c__useradresseditbutton'><EditOutlined /></div>
                            </div>
                        </div>
                    </div>
                }
                {page == 'wishlist' && <Wishlistcomponent />}
                {page == 'coupon' && <Couponcomponent />}

            </div>
        </div>
    )
}

export default Profilecontainer