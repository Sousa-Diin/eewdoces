import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../src/App.css'

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para login
    navigate('/eewdoces/main')
  };

  return (
    <section className="container">
      <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
        <footer className='login-footer'><a>cadastrar</a><a>esqueci minha Senha</a></footer>
      </form>
    </div>
    </section>
  );
}

export default Login;
