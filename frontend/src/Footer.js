import React from 'react';
import './Footer.css'; // Asegúrate de crear este archivo para estilos personalizados
import facebookIcon from './assets/facebook.png'; // Asegúrate de que la ruta sea correcta
import twitterIcon from './assets/twitter.png'; // Asegúrate de que la ruta sea correcta
import linkedinIcon from './assets/linkedin.png'; // Asegúrate de que la ruta sea correcta

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Parcial2H4. Todos los derechos reservados.</p>
        <div className="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" style={{ width: '24px', height: '24px', margin: '0 5px' }} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" style={{ width: '24px', height: '24px', margin: '0 5px' }} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" style={{ width: '24px', height: '24px', margin: '0 5px' }} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
