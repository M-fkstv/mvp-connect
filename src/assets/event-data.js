const setEventDate = (n) => {
  const date = new Date();
  const nextDate = new Date(date);
  nextDate.setDate(date.getDate() + n);
  return nextDate.toLocaleDateString();
};

export const eventData = [
  {
    eventName: 'event1',
    homeTeam: 'Arsenal',
    guestTeam: 'Juventus',
    eventDate: setEventDate(0),
    homeWin: 1,
    guestWin: 2,
    draw: 1.5,
  },
  {
    eventName: 'event2',
    homeTeam: 'Manchester United',
    guestTeam: 'Galatasaray',
    eventDate: setEventDate(1),
    homeWin: 1.13,
    guestWin: 2,
    draw: 1.5,
  },
  {
    eventName: 'event3',
    homeTeam: 'Real Madrid',
    guestTeam: 'Liverpool',
    eventDate: setEventDate(2),
    homeWin: 3,
    guestWin: 2,
    draw: 1.5,
  },
  {
    eventName: 'event4',
    homeTeam: 'Chelsea',
    guestTeam: 'Villareal',
    eventDate: setEventDate(2),
    homeWin: 1.25,
    guestWin: 2,
    draw: 1.5,
  },
  {
    eventName: 'event5',
    homeTeam: 'Everton',
    guestTeam: 'Milan',
    eventDate: setEventDate(2),
    homeWin: 1.1,
    guestWin: 2,
    draw: 1.5,
  },
  {
    eventName: 'event6',
    homeTeam: 'Inter',
    guestTeam: 'Porto',
    eventDate: setEventDate(2),
    homeWin: 1,
    guestWin: 2,
    draw: 1.5,
  },
];
