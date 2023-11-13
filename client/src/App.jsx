import React, { Suspense, lazy, useEffect, useState } from 'react'
import { BrowserRouter, Route, Router, Routes, useLocation } from 'react-router-dom'
import { Cartpage, Categorypage, Couponpage, Homepage, Productpage, Profilepage, Wishlistpage } from './Pages/page'
import { LoginSocialGithub, LoginSocialLinkedin, LoginSocialTwitter } from 'reactjs-social-login'
import './index.css'
import Excelpage from './Excelpage'
import Loadingpage from './components/Loadingpage/Loadingpage'
import Dashboardpage from './Pages/AdminPage/Dashboardpage/Dashboardpage'
import Banneraddpage from './Pages/AdminPage/Banneraddpage/Banneraddpage'
import Bannerpage from './Pages/AdminPage/Bannerpage/Bannerpage'
import Productlistpage from './Pages/AdminPage/Productlist/Productlistpage'
import Categorylistpage from './Pages/AdminPage/Categorylist/Categorylistpage'
import Deliverylistpage from './Pages/AdminPage/Deliverylist/Deliverylistpage'
import Couponlistapage from './Pages/AdminPage/Couponlist/Couponlistapage'
import Productaddpage from './Pages/AdminPage/Productaddpage/Productaddpage'
import Categoryaddpage from './Pages/AdminPage/Categoryaddpage/Categoryaddpage'
import Couponaddpage from './Pages/AdminPage/Couponaddpage/Couponaddpage'
import Reviewpage from './Pages/AdminPage/Reviewpage/Reviewpage'
import Specialofferpage from './Pages/AdminPage/Specialofferpage/Specialofferpage'

const Loginpage = lazy(() => import('./Pages/LoginPage/Loginpage'))
const Signuppage = lazy(() => import('./Pages/SignUpPage/Signuppage'))

const App = () => {
    const location = useLocation()
    const path = location.pathname
    const [bgColor, setBgColor] = useState('#FFFFFF')
    useEffect(() => {
        if (path.split('/')[1] == 'admin') setBgColor('#191D32')
        else setBgColor('#FFFFFF')
    }, [path])
    return (
        <div style={{ background: bgColor, color: `${bgColor == '#FFFFFF' ? '#000' : '#FFF'}` }} className='main'>
            <Routes>
                <Route exact path='/' element={<Homepage />} />
                <Route exact path='/cart' element={<Cartpage />} />
                <Route exact path='/product' element={<Productpage />} />
                <Route exact path='/category' element={<Categorypage />} />
                <Route exact path='/profile' element={<Profilepage />} />
                <Route exact path='/coupon' element={<Couponpage />} />
                <Route exact path='/wishlist' element={<Wishlistpage />} />

                <Route exact path='/login' element={<>
                    <Suspense element={<Loadingpage />}>
                        <Loginpage />
                    </Suspense>
                </>} />
                <Route exact path='/signup' element={<>
                    <Suspense element={<Loadingpage />}>
                        <Signuppage />
                    </Suspense>
                </>} />

                <Route exact path='/excel' element={<Excelpage />} />
                {/* <Route path='/admin' element={ } /> */}

                <Route exact path='/linkedin' element={<LoginSocialLinkedin />} />
                <Route exact path='/github' element={<LoginSocialGithub />} />
                <Route exact path='/twitter' element={<LoginSocialTwitter />} />

                <Route exact path='/admin/addbanner' element={<Banneraddpage />} />
                <Route exact path='/admin/addproduct' element={<Productaddpage />} />
                <Route exact path='/admin/addcategory' element={<Categoryaddpage />} />
                <Route exact path='/admin/addcoupon' element={<Couponaddpage />} />
                <Route exact path='/admin/dashboard' element={<Dashboardpage />} />
                <Route exact path='/admin/banner' element={<Bannerpage />} />
                <Route exact path='/admin/product' element={<Productlistpage />} />
                <Route exact path='/admin/category' element={<Categorylistpage />} />
                <Route exact path='/admin/delivery' element={<Deliverylistpage />} />
                <Route exact path='/admin/coupon' element={<Couponlistapage />} />
                <Route exact path='/admin/review' element={<Reviewpage />} />
                <Route exact path='/admin/specialoffer' element={<Specialofferpage />} />

            </Routes>
        </div>
    )
}

export default App
