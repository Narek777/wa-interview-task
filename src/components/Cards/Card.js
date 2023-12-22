import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Divider from '../base/Divider/Divider';

const Card = ({ title, img, description, href }) => {
  let cardImgUrl = null;
  try {
    cardImgUrl = require(`../../assets/media/${img}.jpg`);
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="card">
      <div className="card_image">
        <LazyLoadImage src={cardImgUrl} alt="Product card" />
      </div>
      <div className="card_content">
        <div className="card_title">{title}</div>
        <Divider type="dashed" />
        <div className="card_description">{description}</div>
        <Link to={href} className="card_btn">
          MORE INFO
        </Link>
      </div>
    </div>
  );
};

export default Card;
