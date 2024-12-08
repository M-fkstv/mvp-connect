import { NavLink } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
    <div className='header'>
      <div className='header__logo'>Logo</div>
      <div className='header__nav'>
        <ul>
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/'}>About</NavLink>
          </li>
          <li>
            <NavLink to={'/'}>Account</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
