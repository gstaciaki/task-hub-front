import axios from 'axios';

const updateTask = async (data, taskId) => {
    try {
        const response = await axios.put(`http://localhost/tasks/${taskId}`, data, {
            headers: {
                'Authorization': localStorage.getItem('session')
            }
        });

        return response
    } catch (error) {
        console.error('Error updating task:', error);
        throw error.response.data;
    }
};

export default updateTask;
