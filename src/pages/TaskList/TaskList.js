import './TaskList.css'
import GraySquare from "../../components/GraySquare/GraySquare"
import SearchBar from '../../components/SearchBar/SearchBar'

const TaskList = () => {
    return (
        <div className='main'>
            <SearchBar/>
            <GraySquare>

            </GraySquare>
        </div>
    )
}

export default TaskList