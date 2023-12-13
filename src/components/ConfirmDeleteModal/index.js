import React, { useState, useEffect } from 'react';
import './ConfirmDeleteModal.css';
import deleteTask from '../../services/deleteTaskService'
import { useSelectedTaskContext } from '../../context/SelectedTaskContext'

const ConfirmDeleteModal = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { selectedTask } = useSelectedTaskContext()

  const handleDelete = async () => {
    try {
      await deleteTask(selectedTask.id);
      setIsVisible(false);
    } catch (error) {
      console.error('Erro ao excluir a tarefa:', error);
    }
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    if (!isVisible) {
      window.location.reload();
    }
  }, [isVisible]);

  return (
    isVisible && (
      <div className='confirmDelete'>
        <section id='back'>
          <p>Deseja Excluir Esta Tarefa?</p>
          <div className='buttons'>
            <button onClick={handleDelete}>Excluir</button>
            <button onClick={handleCancel}>Cancelar</button>
          </div>
        </section>
      </div>
    )
  );
};

export default ConfirmDeleteModal;
