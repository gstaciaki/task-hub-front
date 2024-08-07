import axios from 'axios';

const fetchTasks = async () => {
  try {
    const response = await axios.get('http://localhost/tasks', {
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

export default fetchTasks;
