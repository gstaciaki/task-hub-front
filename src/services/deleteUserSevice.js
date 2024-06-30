import axios from 'axios';

const deleteUser = async (id) => {
    try {
        const response = await axios.delete(`http://localhost/users/${id}`, {
            headers: {
                'Authorization': localStorage.getItem('session')
            }
        });

        return response.data;
    } catch (error) {
        console.error('Error creating task:', error);
        throw error;
    }
};

export default deleteUser;
