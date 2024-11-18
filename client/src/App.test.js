import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

jest.mock('./pages/login/Login', () => () => <div>Login Page</div>);
jest.mock('./pages/signup/SignUp', () => () => <div>SignUp Page</div>);
jest.mock('./pages/dashbord/Dashboard', () => () => <div>Dashboard Page</div>);
jest.mock('./components/ProtectedRoute', () => ({ children }) => children);

describe('App Component', () => {
  test('renders Login page on /login route', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Login Page')).toBeInTheDocument();
  });

  test('renders SignUp page on /signup route', () => {
    render(
      <MemoryRouter initialEntries={['/signup']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('SignUp Page')).toBeInTheDocument();
  });

  test('renders Dashboard page on /dashboard route', () => {
    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Dashboard Page')).toBeInTheDocument();
  });

  test('redirects to Login page for unknown routes', () => {
    render(
      <MemoryRouter initialEntries={['/unknown']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Login Page')).toBeInTheDocument();
  });
});