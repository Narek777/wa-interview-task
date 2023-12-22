import LICENCE_LOGO from '../../../assets/media/license_icon.png';

import './licenceSection.scss';

const LicenseSection = () => {
  return (
    <div className="licence_section">
      <div className="licence_section_text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis consectetur massa.
        Duis non massa placerat, cursus velit in, fermentum justo. Vestibulum tincidunt lacus sit
        amet volutpat dapibus. Donec ullamcorper vel dui vel posuere. Suspendisse euismod in diam
        quis feugiat. Vestibulum cursus, orci eget porttitor feugiat, ipsum turpis posuere orci, id
        vestibulum elit mi vel risus. Aenean gravida nisl eu est mollis, id facilisis urna maximus.
        Nam euismod commodo quam nec hendrerit. Vestibulum quis porta enim. Vestibulum pellentesque
        vitae velit ut facilisis. Praesent eget enim nec augue posuere lobortis.
      </div>
      <div className="licence_section_logo">
        <img src={LICENCE_LOGO} alt="licence_logo" />
      </div>
    </div>
  );
};

export default LicenseSection;
