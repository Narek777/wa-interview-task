import cn from 'classnames';
import { NavLink } from 'react-router-dom';

import { MENU_LINKS } from '../../../constants';
import useOnClickOutside from '../../../utils/OnClickOutside';

import closeIcon from '../../../assets/media/close-icon.svg';

import './navbarmobile.scss';

const NavbarMobile = ({ open, onCloseNavBar }) => {
  const mobileNavBarRef = useOnClickOutside(onCloseNavBar);

  const navbarClassName = cn('navbar', {
    'navbar--open': open,
  });

  return (
    <nav className={navbarClassName} ref={mobileNavBarRef}>
      <button className="navbar_close_button" onClick={onCloseNavBar}>
        <img src={closeIcon} alt="closeIcon" />
      </button>
      {MENU_LINKS.map((menuLink) => (
        <NavLink
          to={menuLink.href}
          onClick={onCloseNavBar}
          key={menuLink.title}
          className={({ isActive }) => ['menuItem', isActive ? 'menuItem--active' : ''].join(' ')}
        >
          {menuLink.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavbarMobile;
