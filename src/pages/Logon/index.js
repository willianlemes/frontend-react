import React, { useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
  const [ id, setId ] = useState('');

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const { data: { id: userId, name: userName } } = await api.get('users/' + id);      

      localStorage.setItem('userId',userId);
      localStorage.setItem('userName',userName);
    } catch (error) {
      alert('Erro ao buscar usuário.');
    }
  }

  return (
    <div className="logon-container">      
      <section className="form">
        <img src={logoImg} alt="Be The Hero"/>        
        <form onSubmit={handleLogin} action="">
        <h1>Faça se logon</h1>
        <input type="text" placeholder="Sua ID"
               value={id} onChange={event => setId(event.target.value)}/>
        <button className="button" type="submit">Entrar</button>

        <Link className="back-link" to="/register">
          <FiLogIn size={16} color="#E02041" />
          Não tenho cadastro
        </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes"/>
    </div>
  );
}