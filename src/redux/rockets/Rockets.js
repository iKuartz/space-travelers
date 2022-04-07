import { FETCH_ROCKETS, BOOK_ROCKET, CANCEL_ROCKET } from '../actionTypes';

// Action creators

export const fetchRockets = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  dispatch({ type: FETCH_ROCKETS, data });
};

export function bookRocket(id) {
  return ({ type: BOOK_ROCKET, id });
}

export function cancelRocket(id) {
  return ({ type: CANCEL_ROCKET, id });
}

// Reducer

export default function rocketsReducer(state = [], action) {
  let rocketList = [];
  switch (action.type) {
    default: return state;

    case FETCH_ROCKETS:
      action.data.forEach((rocket) => {
        rocketList.push({
          id: rocket.rocket_id,
          name: rocket.rocket_name,
          description: rocket.description,
          type: rocket.rocket_type,
          img: rocket.flickr_images[0],
          booked: false,
        });
      });
      return rocketList;

    case BOOK_ROCKET:
      rocketList = state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, boocked: true };
      });
      return rocketList;

    case CANCEL_ROCKET:
      rocketList = state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, boocked: false };
      });
      return rocketList;
  }
}
