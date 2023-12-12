import './UserIcon.css'

const UserIcon = (props) => {

    const handleClick = () => {
        alert('User: ' + props.text.full_name)
    }

    const getInitials = (name) => {
        return name.full_name.slice(0, 1)
    }

    return (
        <button className='icon' onClick={handleClick}>{getInitials(props.text)}</button>
    )
}

export default UserIcon