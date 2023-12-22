import './divider.scss';

const Divider = ({ type, secondaryColor, margin }) => {
  return (
    <div
      className={`divider ${type ? `divider--${type}` : ''} ${
        secondaryColor ? 'divider--secondary-color' : ''
      } ${margin ? 'divider--margin' : ''}`}
    />
  );
};

export default Divider;
