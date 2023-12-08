import HamburgerButton from '../HamburgerButton'
import TasksIcon from '../TasksIcon'
import UsersPageIcon from '../UsersPageIcon'
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='navBar'>
            <HamburgerButton />
            <TasksIcon to='/taskList'/>
            <UsersPageIcon to='/users'/>
        </div>
    )
}

export default NavBar