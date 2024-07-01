import axios from 'axios';

const fetchProfile = async () => {
  try {
    const response = await axios.get('http://localhost/profiles', {
      headers: {
        'Authorization': localStorage.getItem('session')
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

export default fetchProfile;
