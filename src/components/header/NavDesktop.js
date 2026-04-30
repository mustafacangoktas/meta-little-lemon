import { NavLink } from 'react-router-dom';
import { routes } from './Routes';

export const NavDesktop = () => {
  return (
    <ul className='navbar'>
      {routes.map((route) => {
          const { Icon, href, title } = route;
          return (
          <li key={title}>
              <NavLink
                to={href}
                className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}
              >
                <Icon aria-hidden='true' />
                {title}
              </NavLink>
          </li>
          );
      })}
    </ul>
  );
};