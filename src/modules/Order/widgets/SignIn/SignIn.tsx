import useOrder, { OrderRequest } from '../../hooks/useOrder';
import { FormEvent, useContext, useEffect, useRef } from 'react';
import {
  Button,
  Header as HeaderComponent,
  Input,
  Loading,
} from '../../../../components';
import ErrorComponent from './Error';
import { Card } from '../../components';
import { OrderContext } from '../../context/order';
import styled from 'styled-components';

type RequestKeys = keyof OrderRequest;

const Header = styled(HeaderComponent)`
  text-align: center;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const Error = styled(ErrorComponent)`
  font-size: 0.9rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.palette.danger};
`;

const SignIn = () => {
  const { order, isLoading, error, getOrder } = useOrder();
  const { setOrder } = useContext(OrderContext);
  useEffect(() => {
    setOrder(order);
  }, [order]);

  const form = useRef<HTMLFormElement>(null);
  const isSubmitDisabled = isLoading;

  const inputs: { id: RequestKeys; label: string }[] = [
    { id: 'orderNumber', label: 'Order Number' },
    { id: 'zipCode', label: 'Zip Code' },
  ];
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = form.current && new FormData(form.current);

    if (data) {
      const orderEntries = Object.fromEntries(data.entries()) as Record<
        RequestKeys,
        string
      >;
      getOrder(orderEntries);
    }
  };

  return (
    <Card>
      <Header headingLevel={1}>Track your order</Header>
      <form ref={form} onSubmit={handleSubmit}>
        {error && <Error message={error} />}
        {inputs.map(({ id, label }) => (
          <Input id={id} label={label} key={id} required />
        ))}
        <Button type="submit" name="submit" disabled={isSubmitDisabled}>
          {isLoading ? <Loading /> : 'Track'}
        </Button>
      </form>
    </Card>
  );
};

export default SignIn;
