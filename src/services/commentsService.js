import axios from 'axios';

const fetchComments = async (taskId) => {
  try {
    const response = await axios.get(`http://localhost/api/tasks/${taskId}/comments`, {
      withCredentials: true,
      headers: {
        'Authorization': localStorage.getItem('session')
      }
    });

    return response.data.comments;
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw error;
  }
};

export default fetchComments;
