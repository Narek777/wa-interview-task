import './title.scss';

const Title = ({ title, color }) => {
  return (
    <h2 className="title" style={{ '--color-underline': color }}>
      {title}
    </h2>
  );
};

export default Title;
