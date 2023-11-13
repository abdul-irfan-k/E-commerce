import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import './dropfilecomponent.css'

const Dropfilecomponent = ({ setImage, isMultipleImage, image }) => {
    const onDrop = acceptedFiles => {
        isMultipleImage == true ? setImage(acceptedFiles) : setImage(acceptedFiles[0])
    }
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ accept: '*', onDrop })

    return (
        <div className="dropfile-c" >
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p className='dropfile-c__active'>Drop the files here ...</p> :
                        <>
                            {image == null && <div className='dropfile-c__imageselection'>
                                <p>Drag and Drop image here </p>
                                <div className='dropfile-c__selectimagebutton'>Select Image</div>
                            </div>}
                        </>
                }
            </div>

        </div>
    )
}

export default Dropfilecomponent