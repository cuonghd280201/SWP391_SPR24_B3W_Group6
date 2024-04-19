import React, { useEffect, useState } from 'react';
import { imageDb } from '../../utils/firebase';
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { data } from 'jquery';

const FileUploadImage = () => {
    const [img, setImg] = useState(null);
    const [imgUrl, setImgUrl] = useState([]);


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImg(file);
    };

    const handleClick = () => {
        if (!img) {
            console.error('No image selected.');
            return;
        }

        const imgRef = ref(imageDb, `files/${v4()}`);
        uploadBytes(imgRef, img)
            .then((snapshot) => {
                console.log('Uploaded a file successfully!', snapshot);
            })
            .catch((error) => {
                console.error('Error uploading file:', error);
            });
    };

    useEffect(() => {
        listAll(ref(imageDb, "files")).then(imgs => {
            console.log(imgs)
            imgs.items.forEach(val => {
                getDownloadURL(val).then(url => {
                    setImgUrl(data => [...data, url])
                })
            })
        })
    }, [])
    console.log(imgUrl, "imgUrl");

    return (
        <>
            <input type='file' onChange={handleFileChange} />
            <button onClick={handleClick}>Upload</button>
        </>
    );
};

export default FileUploadImage;
