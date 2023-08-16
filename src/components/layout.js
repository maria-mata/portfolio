import React from 'react';
import { Link } from 'gatsby';
import './layout.scss';

export default function Layout ({ children }) {
  const year = new Date().getFullYear();

  return (
    <div className="layout">
      <header>
        <nav className="container">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/#about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main className="container">
        {children}
      </main>
      <footer>
        <div className="container">
          <nav>
            <ul>
              <li><Link to="/">Logo</Link></li>
              <li><Link to="/#about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          <div className="copyright">
            <small>
              © {year} Maria Jose Mata. See on GitHub.
            </small>
          </div>
        </div>
      </footer>
    </div>
  )
}
