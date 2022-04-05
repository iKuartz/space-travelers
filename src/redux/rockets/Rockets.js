import { FETCH_ROCKETS } from '../actionTypes';

export const fetchRockets = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  dispatch({ type: FETCH_ROCKETS, data });
};

export const rocketsReducer = (state = [], action) => {
  const rocketList = [];
  switch (action.type) {
    default: return state;

    case FETCH_ROCKETS:
      action.data.forEach((rocket) => {
        rocketList.push(rocket);
      });
      console.log(rocketList);
      return rocketList;
  }
};
