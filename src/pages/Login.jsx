import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        login();
        navigate('/');
    };

    return (
        <div style={styles.container}>
            <h2>Login</h2>
            <button onClick={handleLogin} style={styles.button}>Login</button>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        padding: '20px',
    },
    button: {
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        padding: '10px 15px',
        cursor: 'pointer',
        borderRadius: '5px',
    },
};

export default Login;
