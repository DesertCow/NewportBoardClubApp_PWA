

import { useNavigate } from "react-router-dom";

import { useMutation, useLazyQuery } from '@apollo/client';
import { CREATE_USER } from '../utils/mutations';
import { defaultProfilePictureUpload_Q } from '../utils/queries';

import React, { useEffect, useState } from "react";

import Form from 'react-bootstrap/Form';

import Auth from '../utils/auth';


function UserSignUp() {

  const [values, setValues] = useState({ memberEmail: "", password: "", confirmPassword: "", memberFirstName: "", memberLastName: "", clubPassword: "" });

  const [createUser, { error, data }] = useMutation(CREATE_USER);
  const [getDefaultProfilePictureUpload, { defaultProfilePictureUploadData } ] = useLazyQuery(defaultProfilePictureUpload_Q);

  const navigate = useNavigate();


    //* Update values when input Changed
  const inputUpdated = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };


//* ######################### Button Handle ###########################

  const returnHome = async (event) => {
    event.preventDefault();

    navigate("/login");

  };

  const HandleSignUp = async (event) => {
    event.preventDefault();

    //* Grab Status of TOS Check Box
    let tosStatus = document.getElementById("tosCheckBox").checked;
    
    //* Validate Signup Data
    let signUpDataValid = false

    //* Confirms no fields are empty
    if(values.memberFirstName != "" && values.memberLastName != "" && values.password != "" && values.clubPassword != ""){
      
      const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      //* Confirms Email Address is valid
      if(values.memberEmail.match(validRegex)){
        signUpDataValid = true
      }
      else{
        window.alert("Invalid Email Address!");
        signUpDataValid = false
      }
      
    } else{
      window.alert("Missing Required Signup Information! All Fields are Required!");
    }


    //TODO: Add Code to validate signup data
    if (signUpDataValid) {
      if (tosStatus) {

        const { memberEmail, password, memberFirstName, memberLastName, clubPassword } = values;

        //* Create New User In Database
        try {
          const { data } = await createUser({
            variables: { ...values },
          });

          //* Generate New JWT Token
          Auth.login(JSON.stringify(data.createUser));

          //* Grab and Decode JWT Token
          let jwtToken = Auth.getProfile()

          // console.log("New User ID: " + jwtToken.data._id)

          //* Trigger Sever to upload a default User Profile Picture for new Account
          const defaultProfileData = await getDefaultProfilePictureUpload({
            variables: { userId: jwtToken.data._id},
          });

          // console.log(defaultProfileData)
          
          // toast.success("Sign-Up Successful!", toastOptions);
          // console.log("Sign-Up Successful!");
          navigate("/home")

        } catch (e) {
          // toast.error("Sign-Up Failed", toastOptions);
          console.error(e);
        }
      } else {
        // console.log("TOS BOX NOT CHECKED!")
        window.alert("Terms Of Service and Privacy Policy Acceptance Box Not Checked!");
      };
    }
  }

return (

    <div className="d-flex flex-column min-vh-100">
      <div className="flex-column d-flex align-items-center justify-content-center">

        <div className="my-4 text-center ">
          <img src={require("../img/BC_Logo_Clear_1.png")}
            className="logo"
            alt="Salt Lick logo" />
        </div>
        <h1 className="text-center welcometo mt-0 mb-5">Welcome New Member!</h1>
        

        <div className="registerBox mt-2 mb-5 d-flex flex-column align-items-center justify-content-center">
          
          <h1 className="text-center welcometo mt-3 mb-1">Create Account</h1>
          
          <form className="signup mt-3">

            <div className="text-center registerdiv">
              <div className="">
                <input
                  className="registerInputText"
                  type="text"
                  id="memberFirstName"
                  name="memberFirstName"
                  placeholder="First Name"
                  onChange={(e) => inputUpdated(e)}
                />
              </div>
            </div>

            <div className="text-center registerdiv mt-4">
              <div className="">
                <input
                  className="registerInputText"
                  type="text"
                  id="memberLastName"
                  name="memberLastName"
                  placeholder="Last Name"
                  onChange={(e) => inputUpdated(e)}
                />
              </div>
            </div>

            <div className="text-center registerdiv mt-4">
              <div className="">
                <input
                  className="registerInputText"
                  type="text"
                  id="memberEmail"
                  name="memberEmail"
                  placeholder="Email"
                  onChange={(e) => inputUpdated(e)}
                />
              </div>
            </div>

            <div className="text-center registerdiv mt-5">
              <div className="">
                <input
                  className="registerInputText"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => inputUpdated(e)}
                />
              </div>
            </div>

            <div className="text-center registerdiv mt-4">
              <div className="">
                <input
                  className="registerInputText"
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  onChange={(e) => inputUpdated(e)}
                />
              </div>
            </div>

            <div className="text-center registerdiv mt-5">
              <div className="">
                <input
                  className="registerInputText"
                  type="text"
                  id="clubPassword"
                  name="clubPassword"
                  placeholder="Club Registration Password"
                  onChange={(e) => inputUpdated(e)}
                />
              </div>
            </div>
          </form>

          <div className="px-4 mt-4 d-flex flex-column align-items-center justify-content-center">
            {/* <div className="tosBox d-flex m-2 form-check"> */}
            <div className="flex-column form-check m-1">
              <div className="d-flex flex-row">
                <input className="mb-2" type="checkbox" name="tosCheckBox" id="tosCheckBox" value="1"></input>
                <h1 className="tosText mx-2" htmlFor="tosBoxID">
                  By signing up you are accepting the <a href="/TermsOfService">Terms Of Service</a> and <a href="/PrivacyPolicy">Privacy Policy.</a>
                </h1>
              </div>
            </div>
          </div>

          <div className="text-center d-flex flex-column align-items-center justify-content-center">
            <button
              className="registerBTN registerPageregisterBTN mt-4 mb-4 p-3 d-flex flex-column align-items-center justify-content-center"
              type="button"
              onClick={(event) => HandleSignUp(event)}>Sign Up
            </button>
            {/* <h4 className="h2 m-0 p-0">or</h4> */}
          </div>

        </div>
          <button className="registerBTN backToLoginBTN mb-4 p-3 d-flex flex-column align-items-center justify-content-center" type="button" onClick={(event) => returnHome(event)}>Back To Login</button>
      </div>

    </div >

  )

}


export default UserSignUp;

//!========================= EOF =========================