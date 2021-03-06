import { useSelector } from 'react-redux';

import './Profiles.css';

export default function Profiles() {
  const bookedRockets = useSelector((state) => state.rockets).filter(
    (rocket) => rocket.booked,
  );
  const bookedMissions = useSelector((state) => state.missions).filter(
    (mission) => mission.joined,
  );

  return (
    <div className="profileContainer">
      <div>
        <h2>My Missions</h2>
        <ul className="list">
          {bookedMissions.map((mission) => (
            <li key={mission.id}>
              {mission.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>My Rockets</h2>
        <ul className="list">
          {bookedRockets.map((rocket) => (
            <li key={rocket.id}>
              {rocket.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
