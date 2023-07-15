
import { useNavigate } from "react-router-dom";

import { useState } from "react";

import { LOGIN_M } from '../../utils/mutations'
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';

const LoginBox = () => {

  const navigate = useNavigate();

  const [formState, setFormState] = useState({ memberEmail: '', password: '' });
  const [login, { data }] = useMutation(LOGIN_M);


//* ########################### Button Handle ###########################
  const HandleLogin = async (event) => {
    
    event.preventDefault();

    const loginSession = event.target;
    const loginForm = new FormData(loginSession);

    const { data } = await login({
      
      variables: { 
        memberEmail: loginForm.get("memberEmail"),
        password: loginForm.get("password"),
      },

    });

    //* Create JWT Token
    Auth.login(JSON.stringify(data.login));

    setFormState({
      memberEmail: '',
      password: '',
    });

    navigate("/home")
    window.scrollTo(0, 0);

  }

  const passwordReset = async (event) => {
    
    event.preventDefault();
    navigate("/passwordReset");
    window.scrollTo(0, 0);

  };

  const newUserRegister = async (event) => {
    
    event.preventDefault();
    navigate("/userRegister");
    window.scrollTo(0, 0);

  };


  return (

   <div className="row d-flex w-100">

        <div className="col-12 mt-3 text-center">
          <img src={require("../../img/BC_Logo_Clear_1.png")}
            className="logo"
            alt="The Board Club Logo" />
        </div>

        <div className="mid col loginBox mx-5">

          <form className="welcome loginBox" onSubmit={HandleLogin}>
            <div className="text-center mt-3">
              <div className="inputdiv loginTextLabel">
                <p className="inputlabel">Email:</p>
                <div className="loginTextBox">
                  <input
                    className="startinputs loginTextBox"
                    type="text"
                    id="memberEmail"
                    name="memberEmail"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="inputdiv mt-4">
                <p className="inputlabel loginTextLabel">Password:</p>
                <div className="">
                  <input
                    className="startinputs loginTextBox"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div>
                <p className="passwordRecoveryLink mb-0 mt-4">
                  <a href="/passwordReset">Password Recovery</a>
                </p>
              </div>
            </div>
            <div className="text-center mb-5">
              <button className="loginbtns p-3 loginBTN" type="submit">Log in</button>
              <button className="loginbtns p-3 registerBTN" type="button" onClick={(event) => newUserRegister(event)}>New Member Registration</button>
            </div>
          </form>
        </div >

      </div >
  )
};

export default LoginBox;


//!========================= EOF =========================