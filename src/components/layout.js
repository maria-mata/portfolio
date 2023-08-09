import * as React from 'react';
import { Link } from 'gatsby';
import './layout.scss';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <nav className="container">
          <ul>
            <li><Link to="/">Logo</Link></li>
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
          <ul>
            <li><Link to="/">Logo</Link></li>
            <li><Link to="/#about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </footer>
    </div>
  )
}

export default Layout;
