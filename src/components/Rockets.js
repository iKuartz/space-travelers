import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, bookRocket, cancelRocket } from '../redux/rockets/Rockets';

import './Rocket.css';

export default function Rockets() {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchRockets()); }, []);
  const rockets = useSelector((state) => state.rockets);

  const handleBooking = (id) => {
    dispatch(bookRocket(id));
  };

  const handleCanceling = (id) => {
    dispatch(cancelRocket(id));
  };

  return (
    <div className="rocketContainer">
      {rockets.map((rocket) => (
        <div key={rocket.id} className="rocket">
          <img
            className="rocketImg"
            src={rocket.img}
            alt={`rocket named: ${rocket.name}`}
          />
          <div className="rocketTxt">
            <h1>{rocket.name}</h1>
            <p>
              {rocket.booked && <i>Reserved</i>}
              {' '}
              {rocket.description}
            </p>
            {rocket.booked ? (
              <button className="btn rocketButton" onClick={() => handleCanceling(rocket.id)} type="button">
                Cancel reservation
              </button>
            ) : (
              <button className="btn rocketButton" onClick={() => handleBooking(rocket.id)} type="button">
                Reserve rocket
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
