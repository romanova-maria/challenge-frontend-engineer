import { useContext } from 'react';
import { OrderContext } from './context/order';
import { Details, SignIn } from './widgets';

interface Props extends WithClassName {}

const Content = ({ className }: Props) => {
  const { order } = useContext(OrderContext);

  return (
    <div className={className}>{order ? <Details order={order} /> : <SignIn />}</div>
  );
};

export default Content;
