import React, { useState, useEffect } from 'react';
import './CommentsList.css';
import Comment from '../Comment';
import fetchComments from '../../services/commentsService';
import { useSelectedTaskContext } from '../../context/SelectedTaskContext'

const CommentsList = () => {
    const { selectedTask } = useSelectedTaskContext()
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedComments = await fetchComments(selectedTask.id);
                setComments(fetchedComments);
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='commentsList'>
            {comments.map(comment => (
                <Comment
                    key={comment.id}
                    description={comment.description}
                    base64Img={comment.image}
                />
            ))}
        </div>
    );
};

export default CommentsList;
