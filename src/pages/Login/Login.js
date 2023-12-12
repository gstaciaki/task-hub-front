import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GraySquare from '../../components/GraySquare/GraySquare';
import Logo from '../../components/Logo/Logo';
import RedButton from '../../components/RedButton/RedButton';
import TextField from '../../components/TextField/TextField';
import axios from 'axios';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const goToIndex = () => {
        navigate('/taskList')
    }

    const handleLogin = () => {
        axios.post('http://localhost/api/login', {
            email: email,
            password: password
        })
        .then(response => {
            localStorage.setItem('session', response.data.session)
            goToIndex();
        })
        .catch(error => {
            alert('Falha no login:', error);
        });
    }

    return (
        <div className="App">
            <Logo />
            <GraySquare>
                <TextField
                    placeholder="Endereço de email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    type="password"
                    placeholder="Senha..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <RedButton onClick={handleLogin} text="LOGIN"/>
            </GraySquare>
        </div>
    );
};

export default Login;