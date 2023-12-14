import './EditButton.css'
import { useState } from 'react'
import EditModal from '../EditModal'

const EditButton = () => {
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div onClick={openModal} className='edit'>
            <button></button>
            <label>Editar Tarefa</label>

            {showModal && <EditModal onClose={closeModal} />}
        </div>
    )
}

export default EditButton 