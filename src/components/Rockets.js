import { useEffect } from 'react';
import { useDispatch as dispatch } from 'react-redux';

import { fetchRockets } from '../redux/rockets/Rockets';

export default function Rockets() {
  useEffect(() => { dispatch(fetchRockets()); }, []);
  return (
    <div />
  );
}
