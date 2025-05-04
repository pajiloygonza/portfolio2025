import React from 'react';
import './footer.css';

const Footer = () => {
    return (
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} My Portfolio. © Created by Vladyslav Pankratov.
        </p>
      </footer>
    );
};

export default Footer;