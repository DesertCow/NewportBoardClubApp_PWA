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

import SurfHacks from './pages/SurfHacks';
import SurfHackDetails from './pages/SurfHack_Details';

import NewportSurfMap from './pages/NewportSurfMap';

import SurfRentals from './pages/SurfRentals';
import AboutClub from './pages/AboutClub';

import Login from './pages/Login';
import UserSignUp from './pages/UserSignUp';
import PasswordReset from './pages/PasswordReset';

import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy'

import CommunityForum from './pages/CommunityForum';

import Admin_Home from './pages/AdminPages/Admin_Home';
import Admin_AddEvent from './pages/AdminPages/AddEvent';
import Admin_UpdateEvent from './pages/AdminPages/UpdateEvent';
import Admin_AddSurfHack from './pages/AdminPages/AddSurfHack';
import Admin_UpdateSurfHack from './pages/AdminPages/UpdateSurfHack';
import Admin_DeleteSurfHack from './pages/AdminPages/DeleteSurfHack';
import Admin_DeleteShaper from './pages/AdminPages/DeleteShaper';
import Admin_AddShaper from './pages/AdminPages/AddShaper';
import Admin_PushNotifications from './pages/AdminPages/PushNotifications';



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
        <Route path="/surf_hacks" element={<SurfHacks />} />
        <Route path="/surf_hacks/:surfHackID" element={<SurfHackDetails />} />
        <Route path="/newport_surf_map" element={<NewportSurfMap />} />
        <Route path="/community_forum" element={<CommunityForum />} />
        <Route path="/surf_rentals" element={<SurfRentals />} />
        <Route path="/about_club" element={<AboutClub />} />
        <Route path="/admin" element={<Admin_Home />} />
        <Route path="/admin/addEvent" element={<Admin_AddEvent />} />
        <Route path="/admin/updateEvent" element={<Admin_UpdateEvent />} />
        <Route path="/admin/addSurfHack" element={<Admin_AddSurfHack />} />
        <Route path="/admin/deleteSurfHack" element={<Admin_DeleteSurfHack />} />
        <Route path="/admin/updateSurfHack/:surfHackID" element={<Admin_UpdateSurfHack />} />
        <Route path="/admin/deleteShaper" element={<Admin_DeleteShaper />} />
        <Route path="/admin/addShaper" element={<Admin_AddShaper />} />
        <Route path="/admin/pushNotifications" element={<Admin_PushNotifications />} />
      </Routes>
    </Router>
  );
}