// import React from "react";
// import ReactDOM from "react-dom";
import App from './App';
import 'bootstrap';
import "./style.css";
import "./reset.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { createRoot } from 'react-dom/client';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

//? GraphQL Server URL
const client = new ApolloClient({
  // uri: 'http://192.168.25.22:4001',
  uri: 'https://boardclubapp-api.up.railway.app',
  cache: new InMemoryCache(),
});


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <div className="masterFrameWidth">
    <ApolloProvider client={client}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <App />
      </LocalizationProvider>
    </ApolloProvider>
  </div>
);