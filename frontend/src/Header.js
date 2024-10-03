import React from 'react';
import './Header.css'; // Si tienes estilos específicos para el header
import logoIcon from './assets/logo-icon.png'; // Asegúrate de que la ruta sea correcta

const Header = () => {
  return (
    <header className="App-header">
      <nav className="navbar">
        <div className="logo">
          <img src={logoIcon} alt="Logo" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
          To-do List
        </div>
        <ul className="nav-links">
          <li><a href="#home">Inicio</a></li>
          <li><a href="#about">Tarea</a></li>
          <li><a href="#services">Login</a></li>
          <li><a href="#contact">Contactos</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
