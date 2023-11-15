import Logo from '../components/Logo/Logo';
import RedButton from '../components/RedButton/RedButton';
import TextField from '../components/TextField/TextField';
import './Login.css'

const Login = () => {
    return (
        <div className="App">
            <Logo />
            <div className='LoginBackground'>
                <TextField placeholder="Endereço de email..." />
                <TextField type="password" placeholder="Senha..." />

                <RedButton text="LOGIN" to="/taskList"/>
            </div>
        </div>
    );
}

export default Login