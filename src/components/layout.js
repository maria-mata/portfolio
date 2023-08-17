import React, { useContext } from 'react';
import { Link } from 'gatsby';
import ThemeButton from './themeButton';
import { ThemeContext } from '../context/themeContext';
import './layout.scss';


export default function Layout ({ children }) {
  const year = new Date().getFullYear();
  const { dark, toggleDark } = useContext(ThemeContext);

  return (
    <div className={`layout${dark ? ' layout--dark' : ''}`}>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li><Link className="nav-link" to="/">Home</Link></li>
              <li><Link className="nav-link" to="/#about">About</Link></li>
              <li><Link className="nav-link" to="/contact">Contact</Link></li>
              <li><ThemeButton dark={dark} onClick={toggleDark} /></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container">
        {children}
      </main>
      <footer>
        <div className="container">
          <nav>
            <ul>
              <li><Link className="nav-link nav-link--footer" to="/">Logo</Link></li>
              <li><Link className="nav-link nav-link--footer" to="/#about">About</Link></li>
              <li><Link className="nav-link nav-link--footer" to="/contact">Contact</Link></li>
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
