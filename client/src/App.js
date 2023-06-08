//
//
//

import React from 'react';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  // createHttpLink,
} from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';


//* Page Import

import Home from './pages/Home';


//* Component Import



export default function App() {

  require('./style.css')
  require('./reset.css')
  // require('./img/Salt_Lick_Menu_DWood-PDF.pdf')


  return (

    // <h1 className="homeTitle text-center mt-5"> The Board Club App [From App.js]</h1>

    // <ApolloProvider client={client}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    // </ApolloProvider>
  );
}