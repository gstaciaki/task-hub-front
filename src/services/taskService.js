import axios from 'axios';

const fetchTasks = async () => {
  try {
    const response = await axios.get('http://localhost/api/tasks', {
      withCredentials: true,
      headers: {
        'Authorization': localStorage.getItem('session')
      }
    });

    return response.data.tasks;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

export default fetchTasks;
