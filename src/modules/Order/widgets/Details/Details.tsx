import { Shipping } from './Shipping';
import styled from 'styled-components';
import { Articles } from './Articles';
import { BREAKPOINTS } from '../../../../styles/breakpoints';
import { DeliveryInfo } from './DeliveryInfo';
import { Header as HeaderComponent } from '../../../../components';

const Header = styled(HeaderComponent)`
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 3rem;
  margin-bottom: 1rem;

  @media (${BREAKPOINTS.desktop}) {
    margin-bottom: 2rem;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (${BREAKPOINTS.desktop}) {
    flex-direction: row;
  }
`;

const Details = ({
  order,
  headingLevel = 1,
}: {
  order: Order;
  headingLevel?: number;
}) => {
  const {
    checkpoints,
    delivery_info: deliveryInfo,
    destination_country_iso3: country,
    tracking_number: trackingNumber,
    courier,
    created,
  } = order;
  const { articles, orderNo } = deliveryInfo;
  const subHeadingLevel = headingLevel + 1;

  return (
    <div>
      <Header headingLevel={headingLevel}>{`Order details - ${orderNo}`}</Header>
      <Info>
        <DeliveryInfo
          created={created}
          courier={courier}
          trackingNumber={trackingNumber}
          country={country}
          deliveryInfo={deliveryInfo}
          headingLevel={subHeadingLevel}
        />
        <Shipping checkpoints={checkpoints} headingLevel={subHeadingLevel} />
        <Articles articles={articles} headingLevel={subHeadingLevel} />
      </Info>
    </div>
  );
};

export default Details;
