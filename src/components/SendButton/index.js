import React from 'react';
import './SendButton.css';
import { useSelectedTaskContext } from '../../context/SelectedTaskContext';
import createComment from '../../services/createCommentSevice';

const SendButton = ({ commentText, selectedFile }) => {
    const { selectedTask } = useSelectedTaskContext();

    const handleButtonClick = async () => {
        try {
            const base64String = await fileToBase64(selectedFile);
            const commentData = {
                description: commentText ?? '',
                image: base64String,
            };

            await createComment(selectedTask.id, commentData);
            window.location.reload();
        } catch (error) {
            console.error('Erro ao enviar o comentário:', error);
        }
    };

    const fileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                resolve(reader.result.split(',')[1]);
            };
            reader.onerror = (error) => {
                reject(error);
            };
            reader.readAsDataURL(file);
        });
    };


    return (
        <button className='send' onClick={handleButtonClick}></button>
    );
};

export default SendButton;
