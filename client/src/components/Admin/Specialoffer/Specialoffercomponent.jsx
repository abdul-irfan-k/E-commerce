import React from 'react'
import './specialoffercomponent.css'
import { MoreVertRounded, AddCircleOutlineRounded } from '@mui/icons-material'

const Specialoffercomponent = () => {
    const a = ['', '', '', '', '']
    return (
        <div className='specialoffer-c'>
            <div className='specialoffer-c__header'>Special offer</div>
            <div className='specialoffer-c__bannerimage'>
                <img src="http://localhost:8000/asset/image/banner/banner.jpg" alt="" />
            </div>
            <div className='specialoffer-c__changebannerbutton'>Change button</div>

            <div className='specialoffer-c__termbox'>
                <div className='specialoffer-c__termboxheader'>Term & Conditions</div>
                <div className='specialoffer-c__term'>
                    Minimum purchase should be 1500
                    HDFC and ICIS credit card only allowed
                    Maxmimum discount will be 5000rs
                    Offer included products only get discount
                </div>
                <div className='specialoffer-c__editbutton'>Edit</div>
            </div>

            <div className='specialoffer-c__productbox'>
                <div className='specialoffer-c__productboxheader'>Products</div>
                <div className='specialoffer-c__productboxcontent'>
                    <div className='specialoffer-c__addproductbox'>
                        <div className='flex-x-y font-black'><AddCircleOutlineRounded /></div>
                        <div>Add Product</div>
                    </div>

                    {a.map((elm) => <div className='specialoffer-c__product'>
                        <div className='specialoffer-c__productimage'>
                            <img src="http://localhost:8000/asset/image/product/pumashoe.jpeg" alt="" />
                        </div>
                        <div className='specialoffer-c__productcontent'>
                            <div className='specialoffer-c__productname'>Nike Tshirt</div>
                            <div className='specialoffer-c__produtmorebutton flex-x-y'><MoreVertRounded /></div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Specialoffercomponent