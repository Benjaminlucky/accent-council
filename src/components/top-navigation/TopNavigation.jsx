import React, { useState } from 'react';
import './topNavigation.css';
import { menuLinks } from '../../data.js';
import { Link, useLocation } from 'react-router-dom';
import { FaBarsStaggered } from 'react-icons/fa6';

function TopNavigation() {
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`top__navigation ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <div className="top__navigationWrapper">
        <div className="tnW__left">
          <div className="accent__logo">
            <img src="/assets/accent-group-logo.svg" alt="Accent Council Logo" className="accentLogo" />
          </div>
          <div className="bridge__logo">
            <img src="/assets/bridge-council-logo.svg" alt="Bridge Council Logo" className="bridgeLogo" />
          </div>
        </div>
        <div className="tnW__right">
          <div className={`menu__links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
            <nav>
              <ul>
                {menuLinks.map(({ path, label, registerLink }) => (
                  <li key={path}>
                    <Link
                      to={path}
                      className={`menu-link ${location.pathname === path ? 'active' : ''} ${
                        location.pathname === path && path === '/register' ? 'registerLink' : ''
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="mobile__nav" onClick={toggleMobileMenu}>
        <FaBarsStaggered className="nav__icon" />
      </div>
    </div>
  );
}

export default TopNavigation;
