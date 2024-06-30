import React, { useEffect, useRef, useState } from 'react';
import './Profile.css';
import NavBar from '../../components/NavBar';
import GraySquare from '../../components/GraySquare/GraySquare';
import uploadAvatar from '../../services/uploadAvatar';
import fetchProfile from '../../services/profileService';

const Profile = () => {
    const inputRef = useRef(null);
    const [profileData, setProfileData] = useState(null);
    const [showModal, setShowModal] = useState(false); // Estado para controlar visibilidade do modal
    const [newName, setNewName] = useState('');
    const [newPassword, setNewPassword] = useState('');

    useEffect(() => {
        async function loadProfile() {
            try {
                const profile = await fetchProfile();
                setProfileData(profile);
            } catch (error) {
                console.error('Erro ao carregar perfil:', error);
            }
        }

        loadProfile();
    }, []);

    const handleUploadAvatar = async () => {
        const file = inputRef.current.files[0];

        if (!file) {
            console.error('Nenhum arquivo selecionado.');
            return;
        }

        try {
            const formData = new FormData();
            formData.append('user_avatar', file);

            const response = await uploadAvatar(formData);

            console.log('Avatar enviado com sucesso:', response);

            const updatedProfile = await fetchProfile();
            setProfileData(updatedProfile);

        } catch (error) {
            console.error('Erro ao enviar avatar:', error);
        }
    };

    const handleClickUpload = () => {
        inputRef.current.click();
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleSaveChanges = () => {
        // Aqui você pode implementar a lógica para salvar as alterações (nome e senha) no backend
        console.log('Novo nome:', newName);
        console.log('Nova senha:', newPassword);

        // Fechar o modal após salvar as alterações
        closeModal();
    };

    if (!profileData) {
        return <div>Carregando perfil...</div>;
    }

    return (
        <div className='profileScreen'>
            <NavBar />
            <div className='center'>
                <GraySquare>
                    <div className='title'>Meu Cadastro</div>
                    <div className='profileInfo'>
                        <div className='informations'>
                            <div className='textField'>
                                <label>Nome:</label>
                                <input value={profileData.name} readOnly />
                            </div>
                            <div className='textField'>
                                <label>Email:</label>
                                <input value={profileData.email} readOnly />
                            </div>
                            <div className='textField'>
                                <label>Tipo de Usuário:</label>
                                <input value={profileData.admin ? 'Administrador' : 'Usuário'} readOnly />
                            </div>
                            <div className='textField'>
                                <label>Data de Criação:</label>
                                <input value={new Date(profileData.created_at).toLocaleString()} readOnly />
                            </div>
                        </div>
                        <div className='avatarInfo'>
                            <div className='avatar'>
                                <img src={profileData.avatar} alt='Avatar' />
                                <input
                                    type='file'
                                    accept='image/*'
                                    ref={inputRef}
                                    style={{ display: 'none' }}
                                    onChange={handleUploadAvatar}
                                />
                                <button onClick={handleClickUpload}>
                                    Carregar Foto
                                    <img src='img/upload.png' alt='Upload Icon' />
                                </button>
                            </div>
                            {showModal ? (
                                <div className='modal'>
                                    <div className='modal-content'>
                                        <span className='close' onClick={closeModal}>&times;</span>
                                        <h2>Editar Informações</h2>
                                        <div className='modal-body'>
                                            <div className='textField'>
                                                <label>Novo Nome:</label>
                                                <input type='text' value={newName} onChange={(e) => setNewName(e.target.value)} />
                                            </div>
                                            <div className='textField'>
                                                <label>Nova Senha:</label>
                                                <input type='password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                                            </div>
                                            <button onClick={handleSaveChanges}>Salvar Alterações</button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <button className='changePassword' onClick={openModal}>Editar Informações</button>
                                </>
                            )}
                        </div>
                    </div>
                </GraySquare>
            </div>
        </div>
    );  
};

export default Profile;
