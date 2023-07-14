//
//
//

// import React from 'react';

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

//* Font Import
import "./fonts/Catamaran-Bold.ttf"

//* Page Import

import Home from './pages/Home';
import SurfLogHome from './pages/SurfLogHome';

import CreateNewSession from './pages/CreateNewSurfSession';
import SurfSessionsList from './pages/SurfSessionsList';
import ViewSurfSession from './pages/ViewSurfSession';

import UserSettings from './pages/UserSettings';


import ClubEventsMain from './pages/ClubEvents';
import ViewEventDetails from './pages/ClubEvents_EventDetails'

import SurfKnowledge from './pages/SurfKnowledge';
import SurfRentals from './pages/SurfRentals';
import AboutClub from './pages/AboutClub';
import Login from './pages/Login';

import UserSignUp from './pages/UserSignUp';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy'


import PasswordReset from './pages/PasswordReset';
import CommunityForum from './pages/CommunityForum';


//* Component Import



export default function App() {

  require('./style.css')
  require('./reset.css')

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/passwordReset" element={<PasswordReset />} />
        <Route path="/userRegister" element={<UserSignUp />} />
        <Route path="/TermsOfService" element={<TermsOfService />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/surf_log" element={<SurfLogHome />} />
        <Route path="/surf_log/create_new_session" element={<CreateNewSession />} />
        <Route path="/surf_log/view_previous_sessions" element={<SurfSessionsList />} />
        <Route path="/surf_log/surfSession/:sessionID" element={<ViewSurfSession />} />
        <Route path="/user_settings" element={<UserSettings />} />
        <Route path="/club_events" element={<ClubEventsMain />} />
        <Route path="/club_events/event/:eventID" element={<ViewEventDetails />} />
        <Route path="/surf_knowledge" element={<SurfKnowledge />} />
        <Route path="/community_forum" element={<CommunityForum />} />
        <Route path="/surf_rentals" element={<SurfRentals />} />
        <Route path="/about_club" element={<AboutClub />} />
      </Routes>
    </Router>
  );
}