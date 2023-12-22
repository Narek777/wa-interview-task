import { Fragment } from 'react';
import './footerNavBar.scss';
import { DEVICE_TYPE, FOOTER_LINKS } from '../../../../constants';
import { Link } from 'react-router-dom';
import { useDeviceType } from '../../../../utils/useDeviceType';

const FooterNavbar = () => {
  const deviceType = useDeviceType();
  return (
    <div className="footer_navbar">
      {FOOTER_LINKS.map((link, i) => (
        <Fragment key={i}>
          <Link to={link.href}>{link.text}</Link>
          {i !== FOOTER_LINKS.length - 1 && deviceType !== DEVICE_TYPE.mobile && <span>|</span>}
        </Fragment>
      ))}
    </div>
  );
};

export default FooterNavbar;
