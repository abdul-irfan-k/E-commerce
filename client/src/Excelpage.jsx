import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { useDropzone } from 'react-dropzone'
import axios from 'axios'
import './excell.css'
import { useCallback } from 'react'

const Excelpage = () => {
    const [image, setImage] = useState(null)
    const [imageUrl, setImageUrl] = useState(null)

    const onDrop = acceptedFiles => {
        const formData = new FormData()
        formData.append('IMAGE', acceptedFiles[0])
        setImage(formData)
    }
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: '*', onDrop
        ,
    })

    const inputHandler = (e) => {
        setImage(e.target.files[0])
    }
    const submitHandler = () => {
        const formData = new FormData()
        formData.append('IMAGE', image)

        console.log('formdata',image)
        axios.post('http://localhost:8000/excel-data', image)
    }
    return (
        <div>
            <Navbar />
            <div className="imageContainer" >
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {
                        isDragActive ?
                            <p>Drop the files here ...</p> :
                            <p>Drag and Drop image here</p>
                    }
                </div>
            </div>
            <input type="file" name='IMAGE' onChange={inputHandler} multiple />
            <div onClick={submitHandler}>submit</div>

            <img src={imageUrl} alt="" />
        </div>
    )
}

export default Excelpage
