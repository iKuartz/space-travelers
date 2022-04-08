import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchMissions,
  joinMission,
  leaveMission,
} from '../redux/missions/Missions';

export default function Missions() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, []);
  const missions = useSelector((state) => state.missions);

  const handleJoining = (id) => {
    dispatch(joinMission(id));
  };

  const handleCanceling = (id) => {
    dispatch(leaveMission(id));
  };

  return (
    <div>
      <table className="table-bordered table-striped table-hover">
        <thead className="padding-top-10">
          <tr className="fs-5">
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.id}>
              <td className="fs-5 fw-bold">{mission.name}</td>
              <td>{mission.description}</td>
              {mission.joined ? (
                <td>
                  <span className="badge squared-pill bg-primary text-light">
                    Active Member
                  </span>
                </td>
              ) : (
                <td>
                  <span className="badge squared-pill bg-secondary text-light">
                    NOT A MEMBER
                  </span>
                </td>
              )}
              <td>
                {mission.joined ? (
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => handleCanceling(mission.id)}
                    type="button"
                  >
                    Leave mission
                  </button>
                ) : (
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => handleJoining(mission.id)}
                    type="button"
                  >
                    Join mission
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
