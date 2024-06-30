import axios from 'axios';

const fetchComments = async (taskId) => {
  try {
    const response = await axios.get(`http://localhost/tasks/${taskId}/comments`, {
      headers: {
        'Authorization': localStorage.getItem('session')
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw error;
  }
};

export default fetchComments;
