import './TasksIcon.css'
import { useNavigate } from 'react-router-dom'

const TasksIcon = ({ to }) => {
    const navigate = useNavigate();

    const handleClick = () => {

        navigate(to)
    }
    return (
        <div className='tasks'>
            <button onClick={handleClick}></button>
        </div>
    )
}

export default TasksIcon