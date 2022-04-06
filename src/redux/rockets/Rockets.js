import { FETCH_ROCKETS, BOOK_ROCKET } from '../actionTypes';

export const fetchRockets = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  dispatch({ type: FETCH_ROCKETS, data });
};

export function bookRocket(id) {
  return ({ type: BOOK_ROCKET, id });
}

export default function rocketsReducer(state = [], action) {
  const rocketList = [];
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
      
  }
}
