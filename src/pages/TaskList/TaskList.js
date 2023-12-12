import './TaskList.css'
import axios from 'axios'
import GraySquare from "../../components/GraySquare/GraySquare"
import SearchBar from '../../components/SearchBar/SearchBar'
import WrappedTableTask from '../../components/TableTask/TableTask'
import NavBar from '../../components/NavBar'

const TaskList = () => {
    return (
        <div className='main'>
            <SearchBar/>
            <GraySquare>
                <WrappedTableTask/>
            </GraySquare>

            <NavBar />
        </div>
    )
}

export default TaskList