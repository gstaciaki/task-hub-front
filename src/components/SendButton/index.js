import React from 'react';
import './SendButton.css';
import { useSelectedTaskContext } from '../../context/SelectedTaskContext';
import createComment from '../../services/createCommentSevice';

const SendButton = ({ commentText }) => {
    const { selectedTask } = useSelectedTaskContext();

    const handleButtonClick = async () => {
        try {
            const commentData = {
                description: commentText ?? ''
            };

            await createComment(selectedTask.id, commentData);
            window.location.reload();
        } catch (error) {
            console.error('Erro ao enviar o comentário:', error);
        }
    };


    return (
        <button className='send' onClick={handleButtonClick}></button>
    );
};

export default SendButton;
