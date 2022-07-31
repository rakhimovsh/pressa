import React from 'react';
import { ReactComponent as Logo } from '../assets/Pressa.svg';
import AuthForm from '../components/authForm';

function Login() {


  return (
    <div className="container" style={{ paddingTop: '50px' }}>
      <Logo />
      <AuthForm/>
    </div>
  );
}

export default Login;