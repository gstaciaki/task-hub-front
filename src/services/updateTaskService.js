import axios from 'axios';

const updateTask = async (data, taskId) => {
    try {
        const response = await axios.put(`http://localhost/api/tasks/${taskId}`, data, {
            withCredentials: true,
            headers: {
                'Authorization': localStorage.getItem('session')
            }
        });

        console.log(response);
        return response
    } catch (error) {
        console.error('Error updating task:', error);
        throw error.response.data;
    }
};

export default updateTask;
