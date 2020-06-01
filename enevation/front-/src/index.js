import React from 'react';
import { render } from 'react-dom';
import App from './route/App';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
import { createApolloClient } from 'utils/apollo-client';
import { StoreProvider } from 'store/index';
import './assets/style/index.scss';
// GraphQL HTTP URL
const API_URL = process.env.REACT_APP_API_URL;
// GraphQL WebSocket (subscriptions) URL.
// If its url is not set in .env then it has same url, host and pathname
const WEBSOCKET_API_URL = process.env.REACT_APP_WEBSOCKET_API_URL;
const websocketApiUrl = WEBSOCKET_API_URL
  ? WEBSOCKET_API_URL
  : API_URL.replace('https://', 'ws://').replace('http://', 'ws://');

// Create a Apollo client
const apolloClient = createApolloClient(API_URL, websocketApiUrl);
render(
  <ApolloProvider client={apolloClient}>
    <ApolloHooksProvider client={apolloClient}>
      <StoreProvider>
        <App />
      </StoreProvider>
    </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
