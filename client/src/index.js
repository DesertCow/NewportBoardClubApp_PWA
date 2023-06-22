// import React from "react";
// import ReactDOM from "react-dom";
import App from './App';
import 'bootstrap';
import "./style.css";
import "./reset.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://192.168.25.22:4000',
  cache: new InMemoryCache(),
});

// import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

// * ~~ Toastify ~~
// import { ToastContainer } from "react-toastify";

// * ~~ Cart Wrapper ~~
// import { CartProvider } from "react-use-cart";


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// const express = require('express');
// const path = require('path');
// const { auth } = require('express-openid-connect');

root.render(
  <div className="masterFrameWidth">
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </div>
);