import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchMissions } from '../redux/missions/Missions';

export default function Missions() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, []);
  const missions = useSelector((state) => state.missions);
  return (
    <div>
      {missions.map((mission) => (
        <div key={mission.id}>
          <h2>{mission.name}</h2>
          <p>{mission.description}</p>
          <input type="checkbox" checked="{mission.reserved}" />
        </div>
      ))}
    </div>
  );
}
