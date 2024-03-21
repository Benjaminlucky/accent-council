import React from 'react';
import './footer.css'

function Footer() {
  const currentYear = new Date().getFullYear(); // Get current year

  return (
    <footer className="section">
        <div className="footer__wrapper">
            <div className="footer__content">

            </div>
            <div className="footer__bottom">
                <p>&copy; {currentYear} Accent Council. All Rights Reserved. <span>Developed by Inspireme Media Networks</span> </p>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
