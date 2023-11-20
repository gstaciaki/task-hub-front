import { useState } from 'react';
import NewTaskButton from '../NewTaskButton';
import TableBody from '../TableBody';
import TableTitle from '../TableTitle/TableTitle';
import './TableTask.css';
import NewTaskField from '../NewTaskField';

const TableTask = () => {
    const [tasks, setTasks] = useState([
        { title: 'Arrumar as parada', createdAt: '14/10/2023', finishedAt: '14/12/2023', owner: 'Guilherme Staciaki', priority: 'Alta' },
        { title: 'Fazer compras', createdAt: '15/10/2023', finishedAt: '20/10/2023', owner: 'Maria Silva', priority: 'Média' },
        { title: 'Estudar React', createdAt: '16/10/2023', finishedAt: '30/11/2023', owner: 'João Souza', priority: 'Alta' },
        { title: 'Limpar casa', createdAt: '18/10/2023', finishedAt: '19/10/2023', owner: 'Ana Oliveira', priority: 'Baixa' }
    ]);
    const [isNewTaskFieldPresent, setIsNewTaskFieldPresent] = useState(false);

    const handleEnter = (event) => {
        if (event.key !== 'Enter') return
        setTasks([...tasks, {title: event.target.value, createdAt: '', finishedAt: '', owner: '', priority: ''}])
        setIsNewTaskFieldPresent(false)
    }

    const addNewTask = () => {
        if (!isNewTaskFieldPresent) {
            const newTask = [<NewTaskField onKeyDown={handleEnter} />];
            setTasks([...tasks, newTask]);
            setIsNewTaskFieldPresent(true)
        }
    };

    return (
        <table className='tableHead'>
            <TableTitle />
            <TableBody rows={tasks} />
            <NewTaskButton onClick={addNewTask} />
        </table>
    );
}

export default TableTask;
