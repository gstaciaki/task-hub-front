import React, { useState } from 'react';
import './InputComment.css';
import UploadButton from '../UploadButton';
import SendButton from '../SendButton';

const InputComment = () => {
    const [commentText, setCommentText] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const handleCommentChange = (e) => {
        setCommentText(e.target.value);
    };

    const handleFileChange = (file) => {
        setSelectedFile(file);
    };

    return (
        <div className='inputComment'>
            <input
                type='text'
                placeholder='Faça um comentário...'
                value={commentText}
                onChange={handleCommentChange}
            />
            <UploadButton onFileChange={handleFileChange} />
            <SendButton commentText={commentText} selectedFile={selectedFile} />
        </div>
    );
};

export default InputComment;