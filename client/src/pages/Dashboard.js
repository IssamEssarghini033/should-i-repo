import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';
import { fetchAIResponse } from '../store/questionSlice';
import '../styles/main.scss';


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
        <div className="dashboard-container">
          <div className="dashboard-header">
            <h1>Welcome to Your Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>
          </div>
    
          <div className="question-form">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Ask a question..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                required
              />
              <button type="submit" disabled={loading}>
                {loading ? 'Thinking...' : 'Submit'}
              </button>
            </form>
            {error && <p className="error-message">{error}</p>}
          </div>
    
          <div className="response-list">
            <h2>Your Responses</h2>
            {responses.map((res, index) => (
              <div key={index} className="response-item">
                <p>Q: {res.question}</p>
                <p>AI: {res.response}</p>
              </div>
            ))}
          </div>
        </div>
      );
};

export default Dashboard;
