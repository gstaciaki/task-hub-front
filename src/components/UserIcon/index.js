import './UserIcon.css'

const UserIcon = (props) => {

    const handleClick = () => {
        alert('User: ' + props.text.name)
    }

    const getInitials = (name) => {
        return name.name.slice(0, 1)
    }

    return (
        <button className='icon' onClick={handleClick}>{getInitials(props.text)}</button>
    )
}

export default UserIcon