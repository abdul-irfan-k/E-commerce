import React from 'react'
import './productdetailcontainer.css'
import Productdiscriptioncomponent from './Productdiscription/Productdiscriptioncomponent'
import Productfaqcomponent from './Productfaq/Productfaqcomponent'
import Productreviewcomponent from './Productreview/Productreviewcomponent'
import Similarproductcomponent from './Similarproduct/Similarproductcomponent'

const Productdetailcontainer = () => {
    return (
        <div>
            <div className='productview-c'>
                <div className='productview-c__imagebox'>
                    <div className="product-c__image">
                        <img src="http://localhost:8000/asset/image/category/earphone.jpeg" alt="" />
                    </div>
                    <div className='productview-c__imageselectionbox'>
                        <div className='productview-c__imageselection'>
                            <img src="http://localhost:8000/asset/image/category/earphone.jpeg" alt="" />
                        </div>
                        <div className='productview-c__imageselection'>
                            <img src="http://localhost:8000/asset/image/category/earphone.jpeg" alt="" />
                        </div>
                        <div className='productview-c__imageselection'>
                            <img src="http://localhost:8000/asset/image/category/earphone.jpeg" alt="" />
                        </div>
                        <div className='productview-c__imageselection'>
                            <img src="http://localhost:8000/asset/image/category/earphone.jpeg" alt="" />
                        </div>
                    </div>
                </div>
                <div className='productview-c__content'>
                    <div className='productview-c__productname'>Nike</div>
                    <div className='productview-c__producttitle'>City Rep TR Training & Gym Shoes For Men (white)</div>
                    <div className='productview-c__productstock'>
                        <div></div>
                        <span>instock</span>
                    </div>
                    <div className='productview-c__productcolorbox'>
                        <span>color</span>
                        <div className='productview-c__colorselectionbox'>
                            <div className='productview-c__colorselection'>
                                <div className='bg-yellow'></div>
                                <span>red</span>
                            </div>
                            <div className='productview-c__colorselection'>
                                <div className='bg-black'></div>
                                <span>green</span>
                            </div>
                            <div className='productview-c__colorselection'>
                                <div className='bg-black'></div>
                                <span>blue</span>
                            </div>
                        </div>
                        <span>more</span>
                    </div>
                    <div className='productview-c__productsizebox'>
                        <span>sizes</span>
                        <div className='productview-c__sizeselectionbox'>
                            <div className='productview-c__sizeselection'>
                                <div className='bg-yellow'></div>
                                <span>7</span>
                            </div>
                            <div className='productview-c__sizeselection'>
                                <div className='bg-black'></div>
                                <span>8</span>
                            </div>
                            <div className='productview-c__sizeselection'>
                                <div className='bg-black'></div>
                                <span>9</span>
                            </div>
                        </div>
                        <span>more</span>
                    </div>
                    <div className='productview-c__orderbuttons'>
                        <div className='productview-c__cartbutton flex-x-y'>Add to Cart</div>
                        <div className='productview-c__purchasebutton flex-x-y'>Buy</div>
                    </div>
                </div>
            </div>

            <Productdiscriptioncomponent />
            <Productfaqcomponent />
            <Productreviewcomponent />
            <Similarproductcomponent />
        </div>
    )
}

export default Productdetailcontainer