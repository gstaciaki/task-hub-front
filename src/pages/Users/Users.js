import React, { useEffect, useState } from 'react';
import './Users.css';
import NavBar from '../../components/NavBar';
import fetchUsers from '../../services/userService';
import createUser from '../../services/createUserSevice';
import updateUser from '../../services/updateUserService';
import deleteUser from '../../services/deleteUserSevice';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isCreateUserModalOpen, setIsCreateUserModalOpen] = useState(false);
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    admin: false,
  });

  useEffect(() => {
    const fetchAndSetUsers = async () => {
      try {
        const usersData = await fetchUsers({ page: 1, per_page: 10 });
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchAndSetUsers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      await createUser(newUser);
      setIsCreateUserModalOpen(false);
      window.location.reload();
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const handleEditUser = async (e) => {
    e.preventDefault();
    try {
      await updateUser(selectedUser.id, newUser);
      setIsEditUserModalOpen(false);
      window.location.reload();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleDeleteUser = async () => {
    try {
      await deleteUser(selectedUser.id);
      setSelectedUser(null);
      window.location.reload();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setIsEditUserModalOpen(true);
    setNewUser({
      name: user.name,
      email: user.email,
      password: '',
      password_confirmation: '',
      admin: user.admin,
    });
  };

  const closeModal = () => {
    setSelectedUser(null);
    setIsCreateUserModalOpen(false);
    setIsEditUserModalOpen(false);
  };

  return (
    <div className='usersScreen'>
      <NavBar />
      <div className='center'>
        <div className='userTableHead'>
          <table>
            <thead className="userTableTitle">
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Tipo de Usuário</th>
                <th>Data de Criação</th>
              </tr>
            </thead>
            <tbody className="userBody">
              {users.map((user) => (
                <tr key={user.id} onClick={() => handleUserClick(user)}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.admin ? 'Administrador' : 'Normal'}</td>
                  <td>{user.created_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='newUser'>
            <button onClick={() => setIsCreateUserModalOpen(true)}>Criar Novo Usuário</button>
          </div>
        </div>

        {isEditUserModalOpen && selectedUser && (
          <div className='userModal'>
            <div className='modalContent'>
              <span className='closeButton' onClick={closeModal}>&times;</span>
              <h2>Editar Usuário</h2>
              <form onSubmit={handleEditUser}>
                <div>
                  <label>Nome:</label>
                  <input
                    type='text'
                    name='name'
                    value={newUser.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label>Email:</label>
                  <input
                    type='email'
                    name='email'
                    value={newUser.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label>Senha:</label>
                  <input
                    type='password'
                    name='password'
                    value={newUser.password}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label>Confirmação de Senha:</label>
                  <input
                    type='password'
                    name='password_confirmation'
                    value={newUser.password_confirmation}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label>
                    <input
                      type='checkbox'
                      name='admin'
                      checked={newUser.admin}
                      onChange={handleInputChange}
                    />
                    Admin
                  </label>
                </div>
                <button type='submit'>Salvar</button>
                <button type='button' onClick={handleDeleteUser} className='deleteButton'>Remover</button>
              </form>
            </div>
          </div>
        )}

        {isCreateUserModalOpen && (
          <div className='userModal'>
            <div className='modalContent'>
              <span className='closeButton' onClick={closeModal}>&times;</span>
              <h2>Criar Novo Usuário</h2>
              <form onSubmit={handleCreateUser}>
                <div>
                  <label>Nome:</label>
                  <input
                    type='text'
                    name='name'
                    value={newUser.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label>Email:</label>
                  <input
                    type='email'
                    name='email'
                    value={newUser.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label>Senha:</label>
                  <input
                    type='password'
                    name='password'
                    value={newUser.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label>Confirmação de Senha:</label>
                  <input
                    type='password'
                    name='password_confirmation'
                    value={newUser.password_confirmation}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label>
                    <input
                      type='checkbox'
                      name='admin'
                      checked={newUser.admin}
                      onChange={handleInputChange}
                    />
                    Admin
                  </label>
                </div>
                <button type='submit'>Criar</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
