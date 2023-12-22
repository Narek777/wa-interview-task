import { NavLink } from 'react-router-dom';

import { MENU_LINKS } from '../../../constants';

import './navbar.scss';

const Navbar = () => {
  return (
    <div className="menuItems_wrapper">
      {MENU_LINKS.map((menuLink) => (
        <NavLink
          to={menuLink.href}
          key={menuLink.title}
          className={({ isActive }) => ['menuItem', isActive ? 'menuItem--active' : ''].join(' ')}
        >
          {menuLink.title}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
