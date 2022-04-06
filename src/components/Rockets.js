import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchRockets } from '../redux/rockets/Rockets';

export default function Rockets() {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchRockets()); }, []);
  const rockets = useSelector((state) => state.rockets);
  console.log(rockets);
  return (
    <div />
  );
}
