import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';

const OFFER_COUNTER: number = 199;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offerCounter={OFFER_COUNTER}/>
  </React.StrictMode>
);


