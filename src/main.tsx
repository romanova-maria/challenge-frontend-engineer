import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

if (process.env.NODE_ENV === 'development') {
  const { worker } = await import('./mocks/browser');
  worker.start({
    onUnhandledRequest: 'bypass',
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
