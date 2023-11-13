import React, { useEffect, useState } from 'react'
import './categoryaddcomponent.css'
import Dropfilecomponent from '../../Dropfile/DropFilecomponent'
import { useDispatch } from 'react-redux'
import { addCategoryHandler } from '../../../actions/adminActions'

const Categoryaddcomponent = () => {
    const dispatch = useDispatch()
    const [image, setImage] = useState(null)
    const [imageUrl, setImageUrl] = useState(null)
    const [categoryDetails, setCategoryDetails] = useState({ name: '', discount: null })

    const inputOnChangeHandler = (e) => setCategoryDetails({ ...categoryDetails, [e.target.name]: e.target.value })
    const removeImageHandler = () => {
        setImage(null)
        setImageUrl(null)
    }
    const submitBtnHandler = () => {
        dispatch(addCategoryHandler({ CATEGORYIMAGE: image, ...categoryDetails }))
    }


    useEffect(() => {
        if (image != null) setImageUrl(URL.createObjectURL(image))
    }, [image])

    return (
        <div className='categoryadd-c'>
            <div className='categoryadd-c__header'>Category</div>
            <div className='categoryadd-c__inputbox'>
                <div className='categoryadd-c__inputimage'>
                    {imageUrl != null && <div className='categoryadd-c__imagepreview'>    <img src={imageUrl} alt="" />    </div>}
                    <Dropfilecomponent setImage={setImage} isMultipleImage={false} image={image} />
                </div>
                {imageUrl != null && <div className='categoryadd-c__removeimagebutton' onClick={removeImageHandler}>remove</div>}
                <div className='categoryadd-c__inputtitle'>
                    <div>Name</div>
                    <input type="text" name='name' onChange={inputOnChangeHandler} />
                </div>
                <div className='categoryadd-c__inputtitle'>
                    <div>Offer</div>
                    <input type="number" name='discount' onChange={inputOnChangeHandler} />
                </div>
                <div className='categoryadd-c__submitbutton bg-yellow flex-x-y' onClick={submitBtnHandler}>Submit</div>
            </div>
        </div>
    )
}

export default Categoryaddcomponent