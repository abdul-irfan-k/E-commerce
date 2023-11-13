import React from 'react'
import './navbar.css'
import { useNavigate } from 'react-router'
import { Home, CardGiftcard, ShoppingCart, Person } from '@mui/icons-material'

const Navbar = () => {
    const navigate = useNavigate()
    const logoClickHandler = () => window.location.reload()

    return (
        <div className='navbar-c'>
            <div className='navbar padding-medium'>
                <div className="navbar__logo">
                    <div className="navbar__logo-img">
                        <img src="/Asset/images/appimage/shoppingcartlogo.png" alt="" onClick={logoClickHandler} />
                    </div>
                </div>

                <div className="navbar__content">
                    <div className="navbar__content-searchbox">
                        <input type="text" placeholder='search' />
                    </div>
                    <div className="navbar__content-menu">
                        <div className='flex-x-y' onClick={() => navigate('/')}>
                            <Home />
                            Home
                        </div>
                        <div className='flex-x-y' onClick={() => navigate('/signup')}>
                            <Person />
                            Sign Up
                        </div>
                        <div className='flex-x-y' onClick={() => navigate('/login')}>
                            <Person />
                            Login
                        </div>
                        <div className='flex-x-y' onClick={() => navigate('/sign up')}>
                            <Person />
                            Account
                        </div>
                    </div>
                </div>
            </div>

            <div className='navbar-c__marginbox'></div>
        </div>

    )
}

export default Navbar
