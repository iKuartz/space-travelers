import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchMissions,
  leaveMission,
  missionsReducer,
} from "../redux/missions/Missions";

export default function Missions() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, []);
  const missions = useSelector((state) => state.missions);

  const handleJoining = (id) => {
    dispatch(bookMission(id));
  };

  const handleCanceling = (id) => {
    dispatch(cancelMission(id));
  };

  return (
    <div>
      {missions.map((mission) => (
        <div key={mission.id}>
          <h2>{mission.name}</h2>
          {mission.joined && <p>Joined!</p>}
          <p>{mission.description}</p>
          <input type='checkbox' checked='{mission.reserved}' />
          {mission.joined ? (
            <button onClick={() => handleCanceling(mission.id)} type='button'>
              Leave mission
            </button>
          ) : (
            <button onClick={() => handleJoining(mission.id)} type='button'>
              Join mission
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
