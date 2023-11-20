import './TaskList.css'
import GraySquare from "../../components/GraySquare/GraySquare"
import SearchBar from '../../components/SearchBar/SearchBar'
import TableTask from '../../components/TableTask/TableTask'

const TaskList = () => {
    return (
        <div className='main'>
            <SearchBar/>
            <GraySquare>
                <TableTask/>
            </GraySquare>
        </div>
    )
}

export default TaskList