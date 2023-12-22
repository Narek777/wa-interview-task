import { LazyLoadImage } from 'react-lazy-load-image-component';

import Title from '../../base/Title/Title';

import PAYMENT_LOGO from '../../../assets/media/payment_icon.png';

import './payments.scss';

const Payments = () => {
  return (
    <div className="payments_section">
      <Title title="PAYMENT LOGOS" color="#FFF" />
      <div className="payment_logos">
        {Array(9)
          .fill({ img: PAYMENT_LOGO })
          .map((payment, i) => (
            <LazyLoadImage key={i} src={payment.img} alt="payment_logo" />
          ))}
      </div>
    </div>
  );
};

export default Payments;
