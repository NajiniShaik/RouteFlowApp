import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="navbar">
    <a href="#Home" className="navbar-logo-details">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png "
        alt="wave"
        className="navbar-logo"
      />
      <h1 className="navbar-title">Wave</h1>
    </a>

    <ul className="navbar-list">
      <li>
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
