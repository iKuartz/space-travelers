import { NavLink } from 'react-router-dom';

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
          <NavLink
            to="/"
            className={({ isActive }) => {
              if (isActive) return 'active-link';
              return '';
            }}
          >
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/missions"
            className={({ isActive }) => {
              if (isActive) return 'active-link';
              return '';
            }}
          >
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profiles"
            className={({ isActive }) => {
              if (isActive) return 'active-link';
              return '';
            }}
          >
            Profiles
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
