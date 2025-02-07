import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/">Inicio</Link> | <Link to="/privacy-policy">Política de Privacidad</Link>
    </footer>
  );
};

export default Footer;