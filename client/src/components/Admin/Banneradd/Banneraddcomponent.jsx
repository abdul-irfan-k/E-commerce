import React, { useEffect, useState } from 'react'
import './banneraddcomponent.css'
import Dropfilecomponent from '../../Dropfile/DropFilecomponent'

const Banneraddcomponent = () => {
    const [image, setImage] = useState(null)
    const [imageUrl, setImageUrl] = useState(null)
    const [bannerDetails, setBannerDetails] = useState({ title: '', content: '' })

    const inputHandler = (e) => setBannerDetails({ ...bannerDetails, [e.target.name]: e.target.value })
    const removeImageHandler = () => {
        setImage(null)
        setImageUrl(null)
    }
    const submitBtnHandler = () => { }

    useEffect(() => {
        if (image != null) setImageUrl(URL.createObjectURL(image))
    }, [image])

    return (
        <div className='banneradd-c'>
            <div className='banneradd-c__header'>Banner</div>
            <div className='banneradd-c__inputbox'>
                <div className='banneradd-c__inputimage'>
                    {imageUrl != null && <div className='banneradd-c__imagepreview'>    <img src={imageUrl} alt="" />    </div>}
                    <Dropfilecomponent isMultipleImage={false} setImage={setImage} image={image} />
                </div>
                {imageUrl != null && <div className='categoryadd-c__removeimagebutton' onClick={removeImageHandler}>remove</div>}
                <div className='banneradd-c__inputtitle'>
                    <div>Title</div>
                    <input type="text" placeholder='Enter the title of the banner' name='title' onChange={inputHandler} />
                </div>
                <div className='banneradd-c__inputcontent'>
                    <div>Content</div>
                    <textarea cols="30" rows="5" name='content' onChange={inputHandler}></textarea>
                </div>
                <div className='banneradd-c__submitbutton bg-yellow flex-x-y' onClick={submitBtnHandler}>Submit</div>
            </div>
        </div>
    )
}

export default Banneraddcomponent