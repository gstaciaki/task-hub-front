import axios from 'axios';

const createTask = async (data) => {
  try {
    const response = await axios.post('http://localhost/tasks', data, {
      headers: {
        'Authorization': localStorage.getItem('session')
      }
    });

    return response.data.tasks;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

export default createTask;
