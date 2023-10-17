import { Card } from '../../../components';
import { CardHeader } from '../components';
import InfoField from './InfoField';
import styled from 'styled-components';

interface Props extends WithHeading, WithClassName {
  trackingNumber: string;
  deliveryInfo: DeliveryInfo;
  country: string;
  courier: string;
  created: string;
}

const DeliveryInfo = styled(
  ({
    created,
    courier,
    trackingNumber,
    deliveryInfo,
    country,
    headingLevel,
    className = '',
  }: Props) => {
    const { region, city, street, recipient, email } = deliveryInfo;
    const address = `${country}, ${region}, ${city}, ${street}`;
    const createdDate = new Date(created).toDateString();

    return (
      <Card className={className}>
        <CardHeader headingLevel={headingLevel}>Delivery Info</CardHeader>
        <InfoField label="Courier">{courier}</InfoField>
        <InfoField label="Tracking number">{trackingNumber}</InfoField>
        <InfoField label="Created date">{createdDate}</InfoField>
        <InfoField label="Address">{address}</InfoField>
        <InfoField label="Recipient info">{`${recipient}, ${email}`}</InfoField>
      </Card>
    );
  },
)`
  ${InfoField} {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

export default DeliveryInfo;
