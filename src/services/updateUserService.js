import axios from 'axios';

const updateUser = async (id, data) => {
    
    if(data.password == '' && data.password_confirmation == '') {
        delete data.password
        delete data.password_confirmation
    }
    try {
        const response = await axios.put(`http://localhost/users/${id}`, data, {
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

export default updateUser;
