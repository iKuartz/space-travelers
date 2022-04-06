import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchMissions } from '../redux/missions/Missions';

export default function Missions() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, []);
  const missions = useSelector((state) => state.missions);
  console.log(missions);
  return <div />;
}
