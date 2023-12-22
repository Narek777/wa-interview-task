import { useEffect, useRef } from 'react';
import Card from './Card';
import { PRODUCTS } from '../../constants';

import './styles.scss';

const Cards = () => {
  const cardsWrapperRef = useRef();
  const cardsContentRef = useRef();

  useEffect(() => {
    // add
    const setupScrollGradients = () => {
      // min and max scrollLeft sizes for gradient animations
      const minScrollAnimationForLeft = 50;
      const maxScrollAnimationForRight =
        cardsContentRef.current?.scrollWidth - cardsContentRef.current?.clientWidth;

      // reset the classes of the wrapper element
      cardsWrapperRef.current?.classList.remove('scrolledRight');
      cardsWrapperRef.current?.classList.remove('scrolledLeft');

      if (cardsContentRef.current?.scrollLeft > minScrollAnimationForLeft) {
        cardsWrapperRef.current?.classList.add('scrolledRight');
      }

      if (cardsContentRef.current?.scrollLeft < maxScrollAnimationForRight) {
        cardsWrapperRef.current?.classList.add('scrolledLeft');
      }
    };

    setupScrollGradients();
    cardsContentRef.current?.addEventListener('scroll', setupScrollGradients);

    return () => {
      cardsContentRef?.current?.removeEventListener('scroll', setupScrollGradients);
    };
  }, [cardsContentRef]);

  return (
    <div className="cards_container" ref={cardsWrapperRef}>
      <div className="cards_content" ref={cardsContentRef}>
        {PRODUCTS.map((product) => (
          <Card key={product.title} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
