import React from 'react';
import './UserIcon.css';

const UserIcon = (props) => {
    
    const handleClick = () => {
        alert('User: ' + props.text.name);
    };

    const getInitials = (name) => {
        return name.slice(0, 1);
    };

    const iconClass = props.text.admin ? 'icon admin' : 'icon';

    return (
        <button className={iconClass} onClick={handleClick}>
            {getInitials(props.text.name)}
        </button>
    );
};

export default UserIcon;
