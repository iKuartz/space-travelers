import { Link } from 'react-router-dom';

import './Header.css';

import logo from '../assets/planet.png';

export default function Header() {
  return (
    <nav>
      <div className="title">
        <img className="logo" src={logo} alt="Planet logo" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <ul className="navLinks">
        <li>
          <Link to="/">
            Rockets
          </Link>
        </li>
        <li>
          <Link to="/missions">
            Missions
          </Link>
        </li>
        <li>
          <Link to="/profiles">
            Profiles
          </Link>
        </li>
      </ul>
    </nav>
  );
}
