import { render, screen } from '../test-utils';
import { Order } from './index';
import userEvent from '@testing-library/user-event';

describe('Order page', () => {
  const setup = () => {
    render(<Order />);
  };

  describe('not signed in', () => {
    it('has a correct header', () => {
      setup();
      const header = screen.getByRole('heading', { name: 'Track your order' });
      expect(header).toBeInTheDocument();
    });
  });

  describe('signed in', () => {
    it('has a correct header', async () => {
      setup();

      const orderInput = screen.getByLabelText('Order Number');
      await userEvent.type(orderInput, '0000RTAB3');
      const zipCodeInput = screen.getByLabelText('Zip Code');
      await userEvent.type(zipCodeInput, '81371');
      const trackButton = screen.getByRole('button', { name: 'Track' });
      await userEvent.click(trackButton);
      const header = screen.getByRole('heading', {
        name: 'Order details - 0000RTAB3',
      });

      expect(header).toBeInTheDocument();
    });
  });
});
