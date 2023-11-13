import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Buffer } from 'buffer'
import './profileimagecomponent.css'

const Profileimagecomponent = () => {
    const [avatarImage, setAvatarImage] = useState([])
    const [avatarImageFile, setAvatarImageFile] = useState([])
    const [selectedImageNum, setSelectedImageNum] = useState(null)
    const [image, setImage] = useState()

    useEffect(async () => {
        const imageUrl = []
        const imageFile = []
        try {
            for (let i = 0; i < 4; i++) {
                const res = await Axios.get(`https://api.multiavatar.com/123456${Math.round(Math.random() * 1000)} Blob.png`, { responseType: 'blob' })
                const file = new File([res.data], 'image.jpeg', { type: 'image/jpeg' })
                const url = URL.createObjectURL(file)
                imageUrl.push(url)
                imageFile.push(file)
                console.log('avatar iamge ', avatarImage)
            }
            setAvatarImage(imageUrl)
            setAvatarImageFile(imageFile)
        } catch (error) {
            console.log(error)
        }
    }, [])

    const selectImageHandler = (index) => {
        setSelectedImageNum(index)
    }

    const submitHandler = async () => {
        if (selectedImageNum == null) return console.log('not selected image')

        const formData = new FormData()
        formData.append('PROFILEIMAGE', avatarImageFile[selectedImageNum])
        Axios.post('http://localhost:8000/updateProfileImage', formData)
    }
    return (
        <div className='userverification'>
            <h1 className='userverification__header'>Profile Image  </h1>
            <p className='mt-30'>Select profile image </p>
            <div className="profileimage-imagebox">
                {avatarImage.length > 0 && avatarImage.map((elm, index) => {
                    return <div className={`profileimage-imagebox-image flex-x-y mt-30 ${index == selectedImageNum ? 'select' : ''}`} onClick={() => selectImageHandler(index)}>
                        <img src={avatarImage[index]} alt="" />
                    </div>
                })
                }

            </div>

            <div className='profileimage-button button-blue mt-30 flex-x-y' onClick={submitHandler}>Submit</div>
        </div>
    )
}

export default Profileimagecomponent
