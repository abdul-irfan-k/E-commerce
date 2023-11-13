import React from 'react'
import './reviewcomponent.css'
import { ReplyRounded, Star } from '@mui/icons-material'

const Reviewcomponent = () => {
    const a = ['', '', '', '', '']

    return (
        <div className='review-c'>
            <div className='review-c__header'>Reting & Reviews</div>

            <div className='review-c__reveiwbox'>
                <div className='reviewcard w-50'>
                    <div className='reviewcard__userdetailbox'>
                        <div className='reviewcard__userimage'>
                            <img src="http://localhost:8000/asset/image/user/default.jpeg" alt="" />
                        </div>
                        <div className='reviewcard__userdetail'>Irfan K</div>
                    </div>
                    <div className='reviewcard__contentbox'>
                        <div className='reviewcard__productdetail'>
                            <div className='reviewcard__productdetail'>Nike Earphone 3</div>
                            <div className='reviewcard__productimage'><img src="http://localhost:8000/asset/image/category/earphone.jpeg" alt="" /></div>
                        </div>
                        <div className='reviewcard__reviewcontent'>
                            <div className='reviewcard__rating'>
                                {a.map((erm) => <div className='flex-x-y font-yellow'><Star /></div>)}
                            </div>
                            <div className='reviewcard__review'>Nice Product</div>
                        </div>
                    </div>
                </div>
                <div className='review-c__replybutton'><ReplyRounded /></div>
            </div>


            <div className='review-c__reveiwbox'>
                <div className='reviewcard w-80'>
                    <div className='reviewcard__userdetailbox'>
                        <div className='reviewcard__userimage'>
                            <img src="http://localhost:8000/asset/image/user/default.jpeg" alt="" />
                        </div>
                        <div className='reviewcard__userdetail'>Irfan K</div>
                    </div>
                    <div className='reviewcard__contentbox'>
                        <div className='reviewcard__productdetail'>
                            <div className='reviewcard__productdetail'>Nike Earphone 3</div>
                            <div className='reviewcard__productimage'><img src="http://localhost:8000/asset/image/category/earphone.jpeg" alt="" /></div>
                        </div>
                        <div className='reviewcard__reviewcontent'>
                            <div className='reviewcard__rating'>
                                {a.map((erm) => <div className='flex-x-y font-yellow'><Star /></div>)}
                            </div>
                            <div className='reviewcard__review'>
                                <pre>{`One of the best product 
Top Features 
Dolby Sounds
Good quality
Water proof

`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='review-c__replybutton'><ReplyRounded /></div>
            </div>

        </div>
    )
}

export default Reviewcomponent