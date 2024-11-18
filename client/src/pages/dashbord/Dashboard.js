import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchAIResponse } from '../../store/questionSlice';
import { logout } from '../../store/authSlice';
import './dashboard.scss';
import Button from '../../components/button/Button';


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
            <Button onClick={handleLogout} label='Logout' />
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
              <Button type="submit" variant='secondary' disabled={loading} label={loading ? 'Thinking...' : 'Submit'}/>
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
