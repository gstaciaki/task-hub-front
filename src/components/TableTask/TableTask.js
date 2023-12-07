import { useState } from 'react';
import NewTaskButton from '../NewTaskButton';
import TableBody from '../TableBody';
import TableTitle from '../TableTitle/TableTitle';
import './TableTask.css';
import NewTaskField from '../NewTaskField';
import TaskModal from '../TaskModal';

const TableTask = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Arrumar as parada', createdAt: '14/10/2023', finishedAt: '14/12/2023', owners: ['Guilherme Staciaki', 'Pedro Lopes', 'Osvaldo', 'Livia'], priority: 'Alta' },
        { id: 2, title: 'Fazer compras', createdAt: '15/10/2023', finishedAt: '20/10/2023', owners: ['Maria Silva'], priority: 'Média' },
        { id: 3, title: 'Estudar React', createdAt: '16/10/2023', finishedAt: '30/11/2023', owners: ['João Souza'], priority: 'Alta' },
        { id: 4, title: 'Limpar casa', createdAt: '18/10/2023', finishedAt: '19/10/2023', owners: null, priority: 'Baixa' }
    ]);
    const [isNewTaskFieldPresent, setIsNewTaskFieldPresent] = useState(false)
    const [selectedTask, setSelectedTask] = useState(null)

    const handleEnter = (event) => {
        if (event.key !== 'Enter') return
        setTasks([...tasks, { title: event.target.value, createdAt: '', finishedAt: '', owner: '', priority: '' }])
        setIsNewTaskFieldPresent(false)
    }

    const addNewTask = () => {
        if (!isNewTaskFieldPresent) {
            const newTask = { field: <NewTaskField onKeyDown={handleEnter} /> };
            setTasks([...tasks, newTask]);
            setIsNewTaskFieldPresent(true)
        }
    };

    const handleTaskClick = (task) => {
        setSelectedTask(task)
    }

    const closeModal = () => {
        setSelectedTask(null)
    }

    return (
        <div className='tableHead'>
            <table>
                <TableTitle />
                <TableBody rows={tasks} onClick={handleTaskClick} />
                <NewTaskButton onClick={addNewTask} />
            </table>

            {selectedTask && (
                <TaskModal task={selectedTask} onClose={closeModal}/>
            )}
        </div>
    );
}

export default TableTask;
