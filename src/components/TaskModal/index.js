import TaskButtons from '../TaskButtons'
import TaskContent from '../TaskContent'
import './TaskModal.css'

const TaskModal = () => {
    return (
        <div className='ModalBody'>
            <section>
                <TaskButtons />
                <TaskContent />
            </section>
        </div>
    )
}

export default TaskModal