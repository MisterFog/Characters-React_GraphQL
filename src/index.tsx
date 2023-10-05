import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import client from './apollo-client';
import { ApolloProvider } from '@apollo/client';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

reportWebVitals();
