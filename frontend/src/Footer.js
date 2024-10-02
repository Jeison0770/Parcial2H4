import React from 'react';
import './Footer.css'; // Asegúrate de crear este archivo para estilos personalizados

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Parcial2H4. Todos los derechos reservados.</p>
        <div className="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
