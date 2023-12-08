import { useNavigate } from 'react-router-dom'
import './UsersPageIcon.css'

const UsersPageIcon = ({ to }) => {
    const navigate = useNavigate();

    const handleClick = () => {

        navigate(to)
    }
    return (
        <div className='users'>
            <button onClick={handleClick}></button>
        </div>
    )
}

export default UsersPageIcon