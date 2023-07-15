

import { useNavigate } from "react-router-dom";

import React, { useState } from "react";
import { LOGIN_M } from '../utils/mutations';
import { useMutation } from '@apollo/client';

import LoginPage from "../components/LoginPage";


const Login = (props) => {


  return (
    <div className="d-flex flex-column align-items-center justify-content-center">

      <LoginPage />

    </div>
  )
};


export default Login;

//!========================= EOF =========================