import { createContext, PropsWithChildren, useState } from 'react';

export const OrderContext = createContext<{
  order: Order | null;
  setOrder: React.Dispatch<React.SetStateAction<Order | null>>;
}>({ order: null, setOrder: () => null });

const OrderProvider = ({ children }: PropsWithChildren) => {
  const [order, setOrder] = useState<Order | null>(null);

  return (
    <OrderContext.Provider value={{ order, setOrder }}>{children}</OrderContext.Provider>
  );
};

export default OrderProvider;
