import * as React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header : React.FC = () => {
  return (
    <div>
      <header>
        <nav className="nav">
          <div>
            <Link className="link" to="/">
              <h1>TOP</h1>
            </Link>
          </div>
          <div>
            <ul className="header-ul">
              <li><Link className="link" to="/">Top</Link></li>
              <li><Link className="link" to="/chart">Chart</Link></li>
              <li><Link className="link" to="/upload">Upload</Link></li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header;