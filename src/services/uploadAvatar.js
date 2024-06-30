import axios from 'axios';

const uploadAvatar = async (formData) => {
    console.log(formData)
    try {
        const response = await axios.post('http://localhost/profile/avatar', formData, {
            headers: {
                'Authorization': localStorage.getItem('session'),
                'Content-Type': 'multipart/form-data'
            }
        });

        return response.data;
    } catch (error) {
        console.error('Erro ao enviar avatar:', error);
        throw error;
    }
};

export default uploadAvatar;
