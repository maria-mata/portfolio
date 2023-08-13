import React from 'react';
import { Link } from 'gatsby';
import './layout.scss';

export default function Layout ({ children }) {
  return (
    <div className="layout">
      <header>
        <nav className="container">
          <ul className="header__links">
            <li><Link to="/">[mariamata](dev)</Link></li>
            <li><Link to="/#about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main className="container">
        {children}
      </main>
      <footer>
        <nav className="container">
          <ul className="footer__links">
            <li><Link to="/">Logo</Link></li>
            <li><Link to="/#about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </footer>
    </div>
  )
}
