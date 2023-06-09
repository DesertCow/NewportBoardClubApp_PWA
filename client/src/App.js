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

import { MaterialSymbol } from 'react-material-symbols';
import 'react-material-symbols/dist/rounded.css';

//* Page Import

import Home from './pages/Home';
import SurfLogHome from './pages/SurfLogHome';
import UserSettings from './pages/UserSettings';


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
        <Route path="/surf_log" element={<SurfLogHome />} />
        <Route path="/user_settings" element={<UserSettings />} />
      </Routes>
    </Router>
    // </ApolloProvider>
  );
}