import { FETCH_MISSIONS } from '../actionTypes';

const fetchMissions = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();
  dispatch({ type: FETCH_MISSIONS, data });
};

function missionsReducer(state = [], action) {
  const missionList = [];
  switch (action.type) {
    default: return state;

    case FETCH_MISSIONS:
      action.data.forEach((mission) => {
        missionList.push({
          id: mission.mission_id,
          name: mission.mission_name,
          description: mission.description,
        });
      });
      return missionList;
  }
}

export { fetchMissions, missionsReducer };
