import { useClickAway } from 'react-use';
import { useState, useRef } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { NavLink } from 'react-router-dom';
import { routes } from './Routes';

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className='mobile-container'>
      <Hamburger
        toggled={isOpen}
        size={20}
        toggle={setOpen}
        label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
      />
      {isOpen && (
        <div className='mobile-menu' role='dialog' aria-label='Navigation menu'>
          <ul>
            {routes.map((route) => {
              const { Icon, href, title } = route;
              return (
                <li key={title}>
                  <NavLink
                    to={href}
                    className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}
                    onClick={() => setOpen(false)}
                  >
                    <Icon aria-hidden='true' />
                    <span>{title}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};