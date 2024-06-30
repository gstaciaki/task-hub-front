import React, { useEffect, useState } from 'react';
import fetchProfile from '../../services/profileService';
import HamburgerButton from '../HamburgerButton';
import ProfilePageIcon from '../ProfilePageIcon';
import TasksIcon from '../TasksIcon';
import UsersPageIcon from '../UsersPageIcon';
import './NavBar.css';

const NavBar = () => {
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        async function loadProfile() {
            try {
                const profile = await fetchProfile();
                setProfileData(profile);
            } catch (error) {
                console.error('Erro ao carregar perfil:', error);
            }
        }

        loadProfile();
    }, []);

    return (
        <div className='navBar'>
            <HamburgerButton />
            <TasksIcon to='/taskList'/>
            <ProfilePageIcon to='/profile' profile={profileData}/>
            {profileData && profileData.admin && <UsersPageIcon to='/users'/>}
        </div>
    );
}

export default NavBar;