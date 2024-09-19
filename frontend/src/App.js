import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState(['Comprar la comida']);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  return (
    <div className="App">
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
      <main>
        <section id="home">
          <h1>Inicia tu lista</h1>
          <div className="add-item">
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder="Escribe una nueva tarea"
            />
            <button onClick={handleAddItem}>Agregar</button>
          </div>
          <ul className="item-list">
            {items.map((item, index) => (
              <li key={index}>□ {item}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
