import { PropsWithChildren, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/themes/theme';
import { OrderProvider } from './modules/Order';

const AllTheProviders = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <OrderProvider>{children}</OrderProvider>
    </ThemeProvider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
