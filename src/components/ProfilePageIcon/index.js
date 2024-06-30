import { useNavigate } from 'react-router-dom'
import './ProfilePageIcon.css'

const ProfilePageIcon = ({ to }) => {
    const navigate = useNavigate();

    const handleClick = () => {

        navigate(to)
    }
    return (
        <div className='profile'>
            <button onClick={handleClick}></button>
        </div>
    )
}

export default ProfilePageIcon