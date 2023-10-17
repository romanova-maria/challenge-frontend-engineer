import { ThemeProvider } from 'styled-components';
import theme from './styles/themes/theme';
import { Order } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Order />
    </ThemeProvider>
  );
}

export default App;
