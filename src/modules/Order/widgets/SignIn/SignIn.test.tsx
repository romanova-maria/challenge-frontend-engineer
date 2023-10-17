import { render, screen, waitFor } from '../../../../test-utils';
import { SignIn } from './index';
import userEvent from '@testing-library/user-event';

describe('SignIn', () => {
  const setup = () => {
    render(<SignIn />);
  };

  it('Should show error message when request fails', async () => {
    setup();
    const nonExistingOrderNumber = 'NonExistingOrderNumber';

    const orderInput = screen.getByLabelText('Order Number');
    await userEvent.type(orderInput, nonExistingOrderNumber);

    const zipCodeInput = screen.getByLabelText('Zip Code');
    await userEvent.type(zipCodeInput, 'NonExistingZipCode');

    const trackButton = screen.getByRole('button', { name: 'Track' });
    await userEvent.click(trackButton);

    const errorMessage = screen.getByText('Request failed with status code 404');
    expect(errorMessage).toBeInTheDocument();

    const header = screen.queryByRole('heading', {
      name: `Order details - ${nonExistingOrderNumber}`,
    });

    expect(header).not.toBeInTheDocument();
  });

  it('Should have Loading on the button after click', async () => {
    setup();

    const orderInput = screen.getByLabelText('Order Number');
    await userEvent.type(orderInput, 'Order Number');

    const zipCodeInput = screen.getByLabelText('Zip Code');
    await userEvent.type(zipCodeInput, 'Zip Code');

    const trackButton = screen.getByRole('button', { name: 'Track' });
    userEvent.click(trackButton).then(async () => {
      await waitFor(() => expect(screen.queryByTestId('loading')).toBeInTheDocument());
    });
  });
});
