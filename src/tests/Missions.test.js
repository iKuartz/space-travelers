import {
  fetchMissions, missionsReducer, joinMission, leaveMission,
} from '../redux/missions/Missions';

describe('The action creators test', () => {
  it('returns the correct action type on joining action', () => {
    expect(joinMission(1)).toEqual({ type: 'JOIN_MISSION', id: 1 });
  });

  it('returns the correct action type on leaving action', () => {
    expect(leaveMission(2)).toEqual({ type: 'LEAVE_MISSION', id: 2 });
  });
});

describe('The missions reducer test', () => {
  const state = [
    {
      id: 1,
      name: 'MISSION1',
      joined: false,
    },
    {
      id: 2,
      name: 'MISSION2',
      joined: false,
    },
    {
      id: 3,
      name: 'MISSION3',
      joined: true,
    },
  ];
  it('returns the state if data was already fetched', () => {
    expect(missionsReducer(state, fetchMissions())).toEqual(state);
  });

  it('returns a joined value of true on booking action', () => {
    const newState = state;
    newState[0].joined = true;
    expect(missionsReducer(state, joinMission(1))).toEqual(newState);
  });

  it('returns a joined value of false on cancel action', () => {
    const newState = state;
    newState[2].joined = false;
    expect(missionsReducer(state, leaveMission(3))).toEqual(newState);
  });
});
