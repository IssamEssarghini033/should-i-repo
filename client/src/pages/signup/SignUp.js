import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../../store/authSlice';
import './signup.scss';

const SignUp = () => {
  const [notMatchPwd, setNotMatchPwd] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setNotMatchPwd(true); 
      return;
    }
    setNotMatchPwd(false); 
    dispatch(registerUser({ firstName, lastName, email, password }));
    if (!auth.loading && !auth.error) { 
      navigate('/dashboard'); 
    }
  };

  return (
    <div className="signup-container">
      <h1>Create an Account</h1>
      <div className='signup-box'>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
          {auth.loading && <p>Loading...</p>}
          {
            (notMatchPwd || auth.error) && (
              <p className="error-message">
                {notMatchPwd && "Passwords do not match. "}
                {auth.error && auth.error}
              </p>
            )
          }
        </form>
        <p>
            Already have an account?{' '}
            <Link to="/login" className='go-to-login'>
            Sign In
            </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
