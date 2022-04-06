import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav>
      <div>
        <img src="../assets/planet.png" alt="Planet logo" />
        <h1>Space Travelers`&apos;` Hub</h1>
      </div>
      <ul>
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
