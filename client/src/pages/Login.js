import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const auth = useSelector((state) => state.auth);

    const handleLogin = async (e) => {
        e.preventDefault();
        const result = await dispatch(loginUser({ email, password }));

        if (result.meta.requestStatus === 'fulfilled') {
            navigate('/dashboard');
        }
    };


    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            {auth.loading && <p>Loading...</p>}
            {auth.error && <p style={{ color: 'red' }}>{auth.error}</p>}
        </div>
    );
};

export default Login;
