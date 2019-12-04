import React, { useState } from 'react';
import { Auth as AuthState } from '../../state/auth';
import styles from './Auth.module.css';

const authContainerStyles = {
  display: 'flex',
  flexDirection: 'row',
}

const tabStyles = {
  display: 'flex',
  flex: 1,
  width: '100%',
}

const Auth = () => {
  const { login, signup } = AuthState.useContainer();
  const [ tab, setTab ] = useState('login');

  return (
    <>
      <button onClick={() => setTab('login')}>Login</button>
      <button onClick={() => setTab('signup')}>Signup</button>

      <div style={authContainerStyles}>
        <div style={{
          ...tabStyles,
          display: tab === 'login' ? 'flex' : 'none',
        }}>
          <h1>Login</h1>
          <form onSubmit={e => login({
            email: e.target.email.value,
            password: e.target.password.value,
          })}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter your email" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Enter your password" />
            <button type="submit">Login</button>
          </form>
        </div>

        <div style={{
          ...tabStyles,
          display: tab === 'signup' ? 'flex' : 'none',
        }}>
          <h1>Signup</h1>
          <form onSubmit={e => signup({
            email: e.target.email.value,
            password: e.target.password.value,
          })}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter an email" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Enter a password" />
            <button type="submit">Signup</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Auth;