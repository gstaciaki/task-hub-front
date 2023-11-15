import { useNavigate } from 'react-router-dom'
import './RedButton.css'

const RedButton = ({ text, to }) => {
    const navigate = useNavigate();

    const handleClick = () => {

        navigate(to)
    }

    return (
        <button onClick={handleClick}>{text}</button>
    )
}

export default RedButton