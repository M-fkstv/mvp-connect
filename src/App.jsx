import { NavLink } from 'react-router-dom';
import { eventData } from './assets/event-data';
import { EventList } from './components/EventList/EventList';

import './App.css';
import { useNotification } from './components/Context/BetContext';

export const App = () => {
  const { notification } = useNotification();
  return (
    <main className='main'>
      {notification ? <div className='notification'>{notification}</div> : null}

      {eventData.map((item, index) => {
        return (
          <NavLink
            to={`/${item.homeTeam}-${item.guestTeam}`}
            key={index}
            state={item}
          >
            <EventList props={item} />
          </NavLink>
        );
      })}
    </main>
  );
};

