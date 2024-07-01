import React, { useState, useEffect } from 'react';
import './EditModal.css';
import { useSelectedTaskContext } from '../../context/SelectedTaskContext';
import fetchProfile from '../../services/profilesService';
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
        setOwners(selectedTask.owners.map(owner => String(owner.id)) || []);
        setFinished(!!selectedTask.finished_at);

        fetchProfile().then((users) => {
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
        const { value } = event.target;
        setOwners((prevOwners) =>
            prevOwners.includes(value) ? prevOwners.filter(owner => owner !== value) : [...prevOwners, value]
        );
    };

    const handleConfirm = async () => {
        const data = {
            title,
            priority: priority ?? 'low',
            owners: owners.map(owner => Number(owner)), // Ensure owners are saved as numbers
            status: finished ? 'closed' : 'open'
        };

        await updateTask(data, selectedTask.id);
        window.location.reload();
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
                            <option value="normal">Média</option>
                            <option value="high">Alta</option>
                            <option value="urgent">Urgente</option>
                        </select>
                        <label>Responsáveis</label>
                        <select multiple value={owners} onChange={handleOwnersChange}>
                            {users.map((user) => (
                                <option key={user.id} value={String(user.id)}>
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
