import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Footer from './Footer'; // Asegúrate de que este archivo Footer.js esté en el mismo directorio
import Header from './Header'; // Importa el nuevo componente Header
import editIcon from './assets/edit-icon.png'; // Asegúrate de que la ruta sea correcta
import deleteIcon from './assets/delete-icon.png'; // Asegúrate de que la ruta sea correcta


function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  // Cargar las tareas desde la API al inicio
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/tasks/');
        setItems(response.data);
      } catch (error) {
        console.error("Error al cargar las tareas", error);
      }
    };
    fetchTasks();
  }, []);

  // Función para agregar o editar una tarea.
  const handleAddItem = async () => {
    if (newItem.trim() !== '') {
      try {
        if (editingIndex !== null) {
          // Editar tarea existente
          const item = items[editingIndex];
          const updatedItem = { ...item, title: newItem };
          await axios.put(`http://localhost:8000/api/tasks/${item.id}/`, updatedItem);
          
          const newItems = [...items];
          newItems[editingIndex] = updatedItem;
          setItems(newItems);
          setEditingIndex(null);
        } else {
          // Agregar nueva tarea
          const response = await axios.post('http://localhost:8000/api/tasks/', { title: newItem });
          setItems([...items, response.data]);
        }
        setNewItem('');
      } catch (error) {
        console.error("Error al agregar o editar la tarea", error);
      }
    }
  };

  // Función para marcar una tarea como completada o no completada.
  const toggleComplete = async (index) => {
    const item = items[index];
    const updatedItem = { ...item, completed: !item.completed };

    try {
      await axios.put(`http://localhost:8000/api/tasks/${item.id}/`, updatedItem);
      const newItems = [...items];
      newItems[index] = updatedItem;
      setItems(newItems);
    } catch (error) {
      console.error("Error al actualizar la tarea", error);
    }
  };

  // Función para eliminar una tarea.
  const deleteItem = async (index) => {
    const item = items[index];

    try {
      await axios.delete(`http://localhost:8000/api/tasks/${item.id}/`);
      const newItems = items.filter((_, i) => i !== index);
      setItems(newItems);
    } catch (error) {
      console.error("Error al eliminar la tarea", error);
    }
  };

  // Función para iniciar la edición de una tarea
  const startEditing = (index) => {
    setNewItem(items[index].title);
    setEditingIndex(index);
  };

  return (
    <div className="App">
      <Header /> {/* Añade el Header aquí */}
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
            <button onClick={handleAddItem}>
              {editingIndex !== null ? 'Actualizar' : 'Agregar'}
            </button>
          </div>
          <ul className="item-list">
            {items.map((item, index) => (
              <li key={item.id} className={item.completed ? 'completed' : ''}>
                <span onClick={() => toggleComplete(index)}>
                  {item.completed ? '☑️' : '❎'} {item.title}
                </span>
                <div>
                <button onClick={() => startEditing(index)}>
                  <img src={editIcon} alt="Editar" style={{ width: '20px', height: '20px' }} />
                </button>
                <button onClick={() => deleteItem(index)}>
                  <img src={deleteIcon} alt="Eliminar" style={{ width: '20px', height: '20px' }} />
                </button>
              </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer /> {/* Añade el Footer aquí */}
    </div>
  );
}

export default App;
