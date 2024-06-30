import React, { useState, useEffect } from 'react';
import './EditModal.css';
import { useSelectedTaskContext } from '../../context/SelectedTaskContext';
import fetchUsers from '../../services/userService';
import updateTask from '../../services/updateTaskService';

const ConfirmDeleteModal = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('');
    const [owners, setOwners] = useState([]);
    const [finished, setFinished] = useState(false);
    const [users, setUsers] = useState([]);
    const { selectedTask } = useSelectedTaskContext();

    useEffect(() => {
        setTitle(selectedTask.title || '');
        setPriority(selectedTask.priority || '');
        setOwners(selectedTask.owners || []);
        setFinished(!!selectedTask.finished_at);

        fetchUsers({page: 1, per_page: 10}).then((users) => {
            setUsers(users);
        });
    }, [selectedTask]);

    const handleCancel = () => {
        setIsVisible(false);
    };

    const handlePriorityChange = (event) => {
        setPriority(event.target.value);
    };

    const handleOwnersChange = (event) => {
        const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
        setOwners(selectedOptions);
    };

    const handleConfirm = () => {
        const data = {
            title,
            priority,
            owners: owners.map(owner => owner.id),
            status: finished ? 'closed' : 'open'
        }

        updateTask(data, selectedTask.id).then(() => {
            setIsVisible(false)
        })
        window.location.reload()
    };

    return (
        isVisible && (
            <div className="editModal">
                <section id="back">
                    <div id='content'>
                        <label>Título</label>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} />
                        <label>Prioridade</label>
                        <select value={priority} onChange={handlePriorityChange}>
                            <option value="low">Baixa</option>
                            <option value="medium">Média</option>
                            <option value="high">Alta</option>
                            <option value="urgent">Urgente</option>
                        </select>
                        <label>Responsáveis</label>
                        <select multiple value={owners} onChange={handleOwnersChange}>
                            {users.map((user) => (
                                <option key={user.id} value={user.id}>
                                    {user.name}
                                </option>
                            ))}
                        </select>
                        <div className="finishedCheckbox">
                            <input type="checkbox" onChange={(e) => setFinished(e.target.checked)} checked={finished} />
                            <label>Finalizada</label>
                        </div>
                        <div>
                            <button onClick={handleConfirm}>Confirmar</button>
                            <button onClick={handleCancel}>Cancelar</button>
                        </div>
                    </div>
                </section>
            </div>
        )
    );
};

export default ConfirmDeleteModal;
