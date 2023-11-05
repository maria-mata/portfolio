import React, { useContext } from 'react';
import { Link } from 'gatsby';
import ThemeButton from './themeButton';
import { ThemeContext } from '../context/themeContext';
import Logo from './icons/logo';
import './layout.scss';


export default function Layout ({ children }) {
  const year = new Date().getFullYear();
  const { dark, toggleDark } = useContext(ThemeContext);

  return (
    <div className={`layout ${dark ? 'dark' : 'light'}`}>
      <div id="modal" />
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <Link className="nav-link nav-link--logo styled-link" to="/">
                  <Logo aria-label="Home" />
                </Link>
              </li>
              <li>
                <Link className="nav-link styled-link" to="/#about">About</Link>
              </li>
              <li>
                <Link className="nav-link styled-link" to="/contact">Contact</Link>
              </li>
              <li>
                <ThemeButton dark={dark} onClick={toggleDark} />
              </li>
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
              <li>
                <Link className="nav-link nav-link--logo nav-link--footer styled-link" to="/">
                  <Logo aria-label="Home" />
                </Link>
              </li>
              <li>
                <Link className="nav-link nav-link--footer styled-link" to="/#about">About</Link>
              </li>
              <li>
                <Link className="nav-link nav-link--footer styled-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="copyright">
            <small>
              © {year} Maria Jose Mata. <a href="https://github.com/maria-mata/portfolio" target="_blank" rel="nofollow noopener noreferrer">See on GitHub</a>.
            </small>
          </div>
        </div>
      </footer>
    </div>
  )
}
