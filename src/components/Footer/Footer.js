import { Link } from 'react-router-dom';

import Divider from '../base/Divider/Divider';
import Container from '../base/Container/Container';
import Payments from './Payments/Payments';
import LicenseSection from './LicenseSection/LicenseSection';
import StrictSection from './StrictSection/StrictSection';

import './footer.scss';

const Footer = () => {
  return (
    <div className="footer_wrapper">
      <Container>
        <div className="footer_sections_container">
          {Array(5)
            .fill(null)
            .map((e, i) => (
              <div key={i} className="footer_section">
                <div className="footer_section_title">Section One</div>
                <div className="footer_section_items">
                  {Array(6)
                    .fill(null)
                    .map((e, i) => {
                      return (
                        <Link to="/FooterLink" key={i} className="footer_section_item">
                          FooterLink
                        </Link>
                      );
                    })}
                </div>
              </div>
            ))}
        </div>
        <Divider secondaryColor margin />
        <Payments />
        <Divider secondaryColor margin />
        <LicenseSection />
        <Divider secondaryColor margin />
        <StrictSection />
      </Container>
    </div>
  );
};

export default Footer;
