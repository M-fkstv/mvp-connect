import { useId, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import './Event.css';
import { useNotification } from '../Context/BetContext';

const Event = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [team, setTeam] = useState('');
  const navigate = useNavigate();
  const { state } = useLocation();
  const { addNotification } = useNotification();

  const { homeTeam, guestTeam, eventDate, homeWin, guestWin, draw } = state;

  console.log(state);

  const homeId = useId(),
    guestId = useId(),
    drawId = useId();

  const handleRadioChange = (event) => {
    setSelectedValue(event.currentTarget.value);
    console.log(event.target);

    setTeam(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = `Спасибо, ваша ставка ${homeTeam} vs ${guestTeam}, ставка на ${selectedValue} принята.`;
    addNotification(message);
    navigate('/', { state: { selectedValue, team } });
  };

  const hasSelected = selectedValue !== null;

  return (
    <form className='event' onSubmit={handleSubmit}>
      <div className='event__teams'>
        <p className='event__teams-home'>{homeTeam}</p>
        <p className='event__date'>{eventDate}</p>
        <p className='event__teams-guest'>{guestTeam}</p>
      </div>

      <div className='event__bet-field'>
        <label className='event__bet-item' htmlFor={homeId}>
          Home {homeWin}
          <input
            required
            type='radio'
            // name={eventName}
            id={homeId}
            value={homeWin}
            onChange={handleRadioChange}
          />
        </label>

        <label className='event__bet-item' htmlFor={drawId}>
          Draw {draw}
          <input
            required
            type='radio'
            // name={eventName}
            id={drawId}
            value={draw}
            onChange={handleRadioChange}
          />
        </label>

        <label className='event__bet-item' htmlFor={guestId}>
          Guest {guestWin}
          <input
            required
            type='radio'
            // name={eventName}
            id={guestId}
            value={guestWin}
            onChange={handleRadioChange}
          />
        </label>
      </div>

      <button className='event__button' type='submit' disabled={!hasSelected}>
        <span className='text'> Place a bet</span>
      </button>
    </form>
  );
};

export default Event;
