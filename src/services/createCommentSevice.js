import axios from 'axios';

const createComment = async (taskId, data) => {
    try {
        const response = await axios.post(`http://localhost/api/tasks/${taskId}/comments`, data, {
            withCredentials: true,
            headers: {
                'Authorization': localStorage.getItem('session')
            }
        });

        console.log(response)
        return response.data.comments;
    } catch (error) {
        console.error('Error creating comment:', error);
        throw error;
    }
};

export default createComment;
