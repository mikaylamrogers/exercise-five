import React from 'react';
import LoginForm from '../components/LoginForm';

function Login({ LoginFunction }) {
    return (
        <div>
            <h1>Login</h1>
            <Login Login={Login} />
        </div>
    );
}

export default Login;