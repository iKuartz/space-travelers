import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchRockets, bookRocket, cancelRocket } from '../redux/rockets/Rockets';

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
    <div>
      {rockets.map((rocket) => (
        <div key={rocket.id}>
          <img src={rocket.img} alt={`rocket named: ${rocket.name}`} />
          <h1>{rocket.name}</h1>
          <p>
            {rocket.booked && 'Booked'}
            {' '}
            {rocket.description}
          </p>
          <p>
            type:
            {rocket.type}
          </p>
          {rocket.booked ? <button onClick={() => handleCanceling(rocket.id)} type="button">Cancel reservation</button> : <button onClick={() => handleBooking(rocket.id)} type="button">Reserve rocket</button>}
        </div>
      ))}
    </div>
  );
}
