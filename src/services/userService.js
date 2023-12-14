import axios from 'axios';

const fetchUsers = async () => {
  try {
    const response = await axios.get('http://localhost/api/users', {
      withCredentials: true,
      headers: {
        'Authorization': localStorage.getItem('session')
      }
    });

    return response.data.users;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

export default fetchUsers;
