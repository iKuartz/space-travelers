import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchRockets } from '../redux/rockets/Rockets';

export default function Rockets() {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchRockets()); }, []);
  const rockets = useSelector((state) => state.rockets);
  return (
    <div>
      {rockets.map((rocket) => (
        <div key={rocket.id}>
          <img src={rocket.img} alt={`rocket named: ${rocket.name}`} />
          <h1>{rocket.name}</h1>
          {rocket.booked ? <p>Booked</p> : false}
          <p>{rocket.description}</p>
          <p>
            type:
            {rocket.type}
          </p>
          <button type="button">Reserve rocket</button>
        </div>
      ))}
    </div>
  );
}
