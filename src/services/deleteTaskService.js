import axios from 'axios';

const deleteTask = async (taskId) => {
  try {
    const response = await axios.delete(`http://localhost/api/tasks/${taskId}`, {
      withCredentials: true,
      headers: {
        'Authorization': localStorage.getItem('session')
      }
    });

    console.log(response);

    return response.data.tasks;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

export default deleteTask;
