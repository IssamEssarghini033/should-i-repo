import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import './login.scss';

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
        <div className="login-container">
            <h1>Should I ?</h1>
            <div className='login-box'>
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
                    <button type="submit" className='submit-button'>Login</button>
                    {auth.loading && <p>Loading...</p>}
                    {auth.error && <p className="error-message">{auth.error}</p>}
                    <p>
                        Don't have an account?{' '}
                        <Link to="/signup" className='go-to-signup'>
                        Sign Up
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );    
};

export default Login;
