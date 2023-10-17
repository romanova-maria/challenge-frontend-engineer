import { DeliveryInfo } from './index';
import { screen, render, within } from '../../../../../test-utils';

describe('Delivery Info card', () => {
  const country = 'Germany',
    region = 'region',
    city = 'city',
    street = 'street';
  const courier = 'Test courier';
  const created = new Date().toDateString();
  const trackingNumber = 'Test tracking number';
  const headingLevel = 1;
  const recipient = 'Test recipient',
    email = 'email';

  const deliveryInfo: DeliveryInfo = {
    articles: [],
    orderNo: '',
    order_date: created,
    recipient: recipient,
    recipient_notification: '',
    email: email,
    street: street,
    city: city,
    region: region,
    timezone: '',
    announced_delivery_date: '',
  };

  const renderDeliveryInfo = () =>
    render(
      <DeliveryInfo
        country={country}
        deliveryInfo={deliveryInfo}
        courier={courier}
        created={created}
        trackingNumber={trackingNumber}
        headingLevel={headingLevel}
      />,
    );

  it('has courier info', () => {
    renderDeliveryInfo();

    const courierField = screen.getByText('Courier:').parentElement;
    expect(courierField).toBeInTheDocument();
    const courierValue = within(courierField!).getByText(courier);
    expect(courierValue).toBeInTheDocument();
  });

  it('has tracking number', () => {
    renderDeliveryInfo();

    const trackingNumberField = screen.getByText('Tracking number:').parentElement;
    expect(trackingNumberField).toBeInTheDocument();
    const trackingNumberValue = within(trackingNumberField!).getByText(trackingNumber);
    expect(trackingNumberValue).toBeInTheDocument();
  });

  it('has created date', () => {
    renderDeliveryInfo();

    const createdDateField = screen.getByText('Created date:').parentElement;
    expect(createdDateField).toBeInTheDocument();
    const createdDateValue = within(createdDateField!).getByText(created);
    expect(createdDateValue).toBeInTheDocument();
  });

  it('has address info', () => {
    renderDeliveryInfo();

    const addressField = screen.getByText('Address:').parentElement;
    expect(addressField).toBeInTheDocument();
    const addressValue = within(addressField!).getByText(
      `${country}, ${region}, ${city}, ${street}`,
    );
    expect(addressValue).toBeInTheDocument();
  });

  it('has recipient info', () => {
    renderDeliveryInfo();

    const recipientField = screen.getByText('Recipient info:').parentElement;
    expect(recipientField).toBeInTheDocument();
    const recipientValue = within(recipientField!).getByText(`${recipient}, ${email}`);
    expect(recipientValue).toBeInTheDocument();
  });
});
