import axios from 'axios';

const fetchUsers = async ({page, per_page}) => {
  try {
    const response = await axios.get('http://localhost/users', {
      params: {
        page,
        per_page
      },
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
