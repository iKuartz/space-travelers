import rocketsReducer, { fetchRockets, bookRocket, cancelRocket } from '../redux/rockets/Rockets';

describe('The action creators test', () => {
  it('returns the correct action type on booking action', () => {
    expect(bookRocket(1)).toEqual({ type: 'BOOK_ROCKET', id: 1 });
  });

  it('returns the correct action type on cancel action', () => {
    expect(cancelRocket(2)).toEqual({ type: 'CANCEL_ROCKET', id: 2 });
  });
});

describe('The rocket reducer test', () => {
  const state = [
    {
      id: 1,
      name: 'ROCKET1',
      booked: false,
    },
    {
      id: 2,
      name: 'ROCKET2',
      booked: false,
    },
    {
      id: 3,
      name: 'ROCKET3',
      booked: true,
    },
  ];
  it('returns the state if data was already fetched', () => {
    expect(rocketsReducer(state, fetchRockets())).toEqual(state);
  });

  it('returns a booked value of true on booking action', () => {
    const newState = state;
    newState[0].booked = true;
    expect(rocketsReducer(state, bookRocket(1))).toEqual(newState);
  });

  it('returns a booked value of false on cancel action', () => {
    const newState = state;
    newState[2].booked = false;
    expect(rocketsReducer(state, cancelRocket(3))).toEqual(newState);
  });
});
