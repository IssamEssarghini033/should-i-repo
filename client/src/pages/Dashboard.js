import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';
import { fetchAIResponse } from '../store/questionSlice';

const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [question, setQuestion] = useState('');
    const { responses, loading, error } = useSelector((state) => state.questions);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(fetchAIResponse(question));
        setQuestion('');
    };

    return (
        <div>
            <h1>Welcome to Should I?</h1>
            <button onClick={handleLogout}>Logout</button>

            <h2>Ask a Question</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Should I...?"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Thinking...' : 'Submit'}
                </button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <h2>Your Responses</h2>
                {responses.map((res, index) => (
                    <div key={index}>
                        <p><strong>Q:</strong> {res.question}</p>
                        <p><strong>AI:</strong> {res.response}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
