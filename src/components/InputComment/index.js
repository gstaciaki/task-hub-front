import React, { useState } from 'react';
import './InputComment.css';
import SendButton from '../SendButton';

const InputComment = () => {
    const [commentText, setCommentText] = useState('');

    const handleCommentChange = (e) => {
        console.log(`ta ino`)
        setCommentText(e.target.value);
    };

    return (
        <div className='inputComment'>
            <input
                type='text'
                placeholder='Faça um comentário...'
                value={commentText}
                onChange={handleCommentChange}
            />
            <SendButton commentText={commentText} />
        </div>
    );
};

export default InputComment;