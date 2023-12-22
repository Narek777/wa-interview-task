import { useState } from 'react';
import { Link } from 'react-router-dom';

import Container from '../base/Container/Container';
import Navbar from './Navbar/Navbar';
import NavbarMobile from './NavbarMobile/NavbarMobile';

import { DEVICE_TYPE } from '../../constants';
import { useDeviceType } from '../../utils/useDeviceType';

import menuIcon from '../../assets/media/menu-icon.svg';
import logo from '../../assets/media/logo.png';

import './header.scss';

const Header = () => {
  const deviceType = useDeviceType();

  const [isMobileNavBarOpen, setIsMobileNavBarOpen] = useState(false);

  return (
    <div className="header_wrapper">
      <Container>
        <div className="header_content">
          <Link to="/" className="header_logo">
            <img src={logo} alt="logo" />
          </Link>
          {deviceType === DEVICE_TYPE.desktop && <Navbar />}
          {deviceType !== DEVICE_TYPE.desktop && (
            <button className="navbar_toggle_button" onClick={() => setIsMobileNavBarOpen(true)}>
              <img src={menuIcon} alt="menuIcon" />
            </button>
          )}
        </div>
      </Container>
      {deviceType !== DEVICE_TYPE.desktop && (
        <NavbarMobile
          open={isMobileNavBarOpen}
          onCloseNavBar={() => setIsMobileNavBarOpen(false)}
        />
      )}
    </div>
  );
};

export default Header;
