import axios from 'axios';

const createUser = async (data) => {
  try {
    const response = await axios.post('http://localhost/users', data, {
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

export default createUser;
