import React from 'react'
import './productreviewcomponent.css'
import { StarHalf, ExpandCircleDownOutlined } from '@mui/icons-material'

const Productreviewcomponent = () => {
    return (
        <div className='productreview'>
            <div className='productreview__header'>Ratings & Reviews</div>
            <div className="productreview__content">

                <div className='productreview__ratingbox'>
                    <div className='productreview__ratingleftbox'>
                        <span className='productreview__allrating'><StarHalf /></span>
                        <span>4.1 Star</span>
                    </div>
                    <div className='productreview__ratingrightbox'>
                        <div className='productreview__rating'>
                            <span><StarHalf /> 120</span>
                            <div className='productreview__ratingprogress'>
                                <div className='bg-yellow w-100'></div>
                            </div>
                        </div>
                        <div className='productreview__rating'>
                            <span><StarHalf />100</span>
                            <div className='productreview__ratingprogress'>
                                <div className='bg-yellow w-80'></div>
                            </div>
                        </div>
                        <div className='productreview__rating'>
                            <span><StarHalf />25</span>
                            <div className='productreview__ratingprogress'>
                                <div className='bg-yellow w-20'></div>
                            </div>
                        </div>
                        <div className='productreview__rating'>
                            <span><StarHalf />30</span>
                            <div className='productreview__ratingprogress'>
                                <div className='bg-yellow w-30'></div>
                            </div>
                        </div>
                        <div className='productreview__rating'>
                            <span><StarHalf />48</span>
                            <div className='productreview__ratingprogress'>
                                <div className='bg-yellow w-50'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='productreview__line'></div>
            <div className='productreview__sortbutton flex-x-y'>Sort By<ExpandCircleDownOutlined /></div>

            <div className='productreview__reviewbox w-50'>
                <span className='productreview__reviewbox__rating bg-green'>5 <span><StarHalf /></span> </span>
                <div className='productreview__paragraph'>
                    <pre>
                        {`I recently purchased this shoe. It was Nice`}
                    </pre>
                </div>
                <div className='productreview__reviewer'>purchase verified by irfan</div>
            </div>
            <div className='productreview__reviewbox w-100'>
                <span className='productreview__reviewbox__rating bg-red'>1 <span><StarHalf /></span> </span>
                <div className='productreview__paragraph'>
                    <pre>
                        {`This is the worst thing i purchased please go for another shoe
They not  provide any waranty
please go another brand
                        `}
                    </pre>
                </div>
                <div className='productreview__reviewer'>purchase verified by irfan</div>
            </div>
            <div className='productreview__reviewbox w-50'>
                <span className='productreview__reviewbox__rating bg-green'>4 <span><StarHalf /></span> </span>
                <div className='productreview__paragraph'>
                    <pre>
                        {`I recently purchased this shoe. It was Nice`}
                    </pre>
                </div>
                <div className='productreview__reviewer'>purchase verified by irfan</div>
            </div>
        </div>
    )
}

export default Productreviewcomponent