import { FETCH_MISSIONS, JOIN_MISSION, LEAVE_MISSION } from "../actionTypes";

// Action creators

const fetchMissions = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();
  dispatch({ type: FETCH_MISSIONS, data });
};

function joinMission(id) {
  return ({ type: JOIN_MISSION, id });
}

function leaveMission(id) {
  return { type: LEAVE_MISSION, id };
}

function missionsReducer(state = [], action) {
  const missionList = [];
  switch (action.type) {
    default:
      return state;

    case FETCH_MISSIONS:
      action.data.forEach((mission) => {
        missionList.push({
          id: mission.mission_id,
          name: mission.mission_name,
          description: mission.description,
          joined: false
        });
      });
      return missionList;

    case JOIN_MISSION:
      missionList = state.map((mission) => {
        if (mission.id !== action.id) return mission;
        return { ...mission, joined: true };
      });
      return missionList;

    case LEAVE_MISSION:
      missionList = state.map((mission) => {
        if (mission.id !== action.id) return mission;
        return { ...mission, joined: false };
      });
      return missionList;
  }
}

export { fetchMissions, missionsReducer, joinMission, leaveMission };
