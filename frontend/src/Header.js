import React from 'react';
import './Header.css'; // Si tienes estilos específicos para el header

const Header = () => {
  return (
    <header className="App-header">
      <nav className="navbar">
        <div className="logo">To-do List</div>
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
