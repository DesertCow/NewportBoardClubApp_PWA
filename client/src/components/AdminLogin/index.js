import { useNavigate } from "react-router-dom";

import { useState } from "react";

import { ADMIN_LOGIN_M } from '../../utils/mutations'
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';

const AdminLoginBox = () => {

  const navigate = useNavigate();

  const [formState, setFormState] = useState({ adminEmail: '', adminPassword: '' });
  const [adminLogin, { data }] = useMutation(ADMIN_LOGIN_M);


//* ########################### Button Handle ###########################
  const HandleLogin = async (event) => {
    
    event.preventDefault();

    const loginSession = event.target;
    const loginForm = new FormData(loginSession);

    const { data } = await adminLogin({
      
      variables: { 
        adminEmail: loginForm.get("adminEmail"),
        adminPassword: loginForm.get("adminPassword"),
      },

    });

    //TODO: Enable check that valid token is generated...
    if( data.adminLogin.token == "INVALID ADMIN LOGIN" || data.adminLogin.token == "INVALID ADMIN PASSWORD") {

      //* Bad Token Do Not Save
      console.log(data.adminLogin.token)

    }
    else {

      //* Create JWT Token
      Auth.adminLogin(JSON.stringify(data.adminLogin));

    

    setFormState({
      memberEmail: '',
      password: '',
    });

    navigate("/admin")
    window.location.reload(false);
    window.scrollTo(0, 0);

    }
    
  }

  return (

   <div className="row d-flex justify-content-center w-100">

        <div className="col mt-3 justify-content-center text-center">
          <img src={require("../../img/BC_Logo_Clear_1.png")}
            className="logo "
            alt="The Board Club Logo" />
        </div>

        <h1 className="row adminLoginTitle justify-content-center mb-4"> Admin Login</h1>

        <div className="row adminLoginBox text-center mx-5"> 
          <div className="d-flex col justify-content-center mx-5">

            <form className="welcome loginBox p-3" onSubmit={HandleLogin}>
              <div className="text-center mt-3">
                <div className="inputdiv loginTextLabel">
                  <p className="inputlabel">Admin Email:</p>
                  <div className="loginTextBox">
                    <input
                      className="startinputs loginTextBox"
                      type="text"
                      id="adminEmail"
                      name="adminEmail"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div className="inputdiv mt-4">
                  <p className="inputlabel loginTextLabel">Admin Password:</p>
                  <div className="">
                    <input
                      className="startinputs loginTextBox"
                      type="password"
                      id="adminPassword"
                      name="adminPassword"
                      placeholder="Password"
                    />
                  </div>
                </div>
              </div>
              <div className="text-center mb-5">
                <button className="loginbtns p-3 loginBTN" type="submit">Log in</button>
              </div>
            </form>
          </div >
        </div>
      <footer className="d-flex justify-content-center adminLoginFooter">
        <div className="d-flex align-items-left pt-2 px-2 pb-1 justify-content-around admincontactFooter">
          <div className="d-flex flex-column">
            <a href="https://github.com/DesertCow">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000000" className="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
          </div>
          {/* <MainFooter /> */}
          <div className="companyName d-flex justify-content-center align-items-center">🙊 Monkey See Monkey Do LLC. 🙉</div>
          <div className="d-flex flex-column">
            <a href="https://desertcow.github.io/Portfolio/">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000000" className="bi bi-person-badge-fill" viewBox="0 0 16 16">
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>

      </div >
  )
};

export default AdminLoginBox;


//!========================= EOF =========================