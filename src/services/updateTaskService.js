import axios from 'axios';

const updateTask = async (data, id) => {

    Object.keys(data).forEach(key => {
        if(!data[key]) delete data[key];
        // if(key == 'owners') {
        //     data.owners = data.owners.map(e => typeof e == 'string' ? e : e.id)
        // }
    }) 
    try {
        const response = await axios.put(`http://localhost/tasks/${id}`, data, {
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

export default updateTask;
