import styled from 'styled-components';
import { Content, OrderProvider } from '../modules/Order';
import { BREAKPOINTS } from '../styles/breakpoints';
import { MOBILE_SIDE_PADDING } from '../styles/themes/theme';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(${(props) => props.theme.palette.primary}, white 90%);
  display: flex;
  justify-content: center;
  padding: 2rem ${MOBILE_SIDE_PADDING} 1rem ${MOBILE_SIDE_PADDING};

  @media (${BREAKPOINTS.desktop}) {
    align-items: center;
  }
`;

const Order = () => {
  return (
    <OrderProvider>
      <Container>
        <Content />
      </Container>
    </OrderProvider>
  );
};

export default Order;
