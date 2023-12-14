import React, { useRef } from 'react';
import './UploadButton.css';

const UploadButton = ({ onFileChange }) => {
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            onFileChange(file);
        }
    };

    return (
        <div className='uploadButton'>
            <input
                type='file'
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            <button className='upload' onClick={handleButtonClick}></button>
        </div>
    );
};

export default UploadButton;
