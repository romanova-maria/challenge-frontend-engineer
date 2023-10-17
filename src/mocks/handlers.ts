import { rest } from 'msw';
import apiUrl from '../services/apiUrl';
import orders from './orders.json';
export const handlers = [
  rest.get(apiUrl('/orders/:orderId'), (req, res, ctx) => {
    const { orderId } = req.params;
    const zip = req.url.searchParams.get('zip');
    console.log('params', req);
    const order = getOrder(orderId as string, zip as string);

    if (!order) {
      const error = {
        message: 'Invalid order number or zip code.',
      };

      return res(
        ctx.status(404),
        ctx.set('Content-Type', 'application/json'),
        ctx.json(error),
      );
    }

    return res(
      ctx.status(200),
      ctx.set('Content-Type', 'application/json'),
      ctx.json(order),
    );
  }),
];

const getOrder = (orderNumber: string, zipCode: string) =>
  (orders as Order[]).find(
    (order) => order.delivery_info.orderNo === orderNumber && order.zip_code === zipCode,
  );
