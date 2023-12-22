import cn from 'classnames';

import './container.scss';

const Container = ({ children, className }) => {
  const containerClassName = cn('container', className);

  return <div className={containerClassName}>{children}</div>;
};

export default Container;
