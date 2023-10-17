import { CanceledError } from 'axios';
import { useState } from 'react';
import apiClient from '../../../services/apiClient';

export interface OrderRequest {
  orderNumber: string;
  zipCode: string;
}

const useOrder = () => {
  const [order, setOrder] = useState<Order | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  const getOrder = ({ orderNumber, zipCode }: OrderRequest) => {
    const controller = new AbortController();

    setLoading(true);

    apiClient
      .get(`orders/${orderNumber}?zip=${zipCode}`, { signal: controller.signal })
      .then((res) => {
        setOrder(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => controller.abort();
  };

  return { order, error, isLoading, getOrder };
};

export default useOrder;
