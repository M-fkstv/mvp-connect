import './EventList.css';

export const EventList = ({ props }) => {
  const { homeTeam, guestTeam, eventDate, homeWin, guestWin, draw } = props;

  return (
    <div className='event-list'>
      <p className='event-list__teams'>
        {homeTeam} - {guestTeam}
      </p>
      <p className='event-list__date'>{eventDate}</p>
      <div className='event-list__bets'>
        <p>Home {homeWin}</p>
        <p>Guest {guestWin}</p>
        <p>Draw {draw}</p>
      </div>
    </div>
  );
};
