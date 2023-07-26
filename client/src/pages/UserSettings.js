

import Header from '../components/Header';
import NavFooter from '../components/NavFooter';
import WeatherWidget from "../components/WeatherWidget";
import LoginPage from "../components/LoginPage";

import Auth from '../utils/auth';

import { useState, useCallback } from 'react';
// import { SelectDatepicker } from 'react-select-datepicker';

// import { PASS_UPDATE, EMAIL_UPDATE, LOGIN_Q, NAME_UPDATE } from '../utils/mutations';
import { EMAIL_UPDATE, PASS_UPDATE, NAME_UPDATE } from '../utils/mutations';
import { getURLupload_Q } from '../utils/queries';
import { useMutation, useLazyQuery } from '@apollo/client';

import { useNavigate } from "react-router-dom";

function UserSettings() {

  //* Validate JWT Token/Login
  if(Auth.loggedIn()){

    const navigate = useNavigate();

    const [passwordState, setPasswordState] = useState({ password: '', confirm: '', id: '' });

    const [updatePass, { passData }] = useMutation(PASS_UPDATE);
    const [updateEmail, { emailData }] = useMutation(EMAIL_UPDATE);
    const [updateName, { nameData }] = useMutation(NAME_UPDATE);

    const [getSecureURL, { secureURLdata } ] = useLazyQuery(getURLupload_Q);

    const [selectedFile, setSelectedFile] = useState();


    const todayDate = new Date()
    const [datevalue, setValue] = useState(todayDate);
    const dateMonth = todayDate.getMonth() + 1;

    const onDateChange = useCallback((date: Date) => {
      setValue(date);
    }, []);


    //* Grab and Decode JWT Token
    let jwtToken = Auth.getProfile()
    // console.log("Login! = " + JSON.stringify(login))

    const fileChangeHandler = (event) => {
      setSelectedFile(event.target.files[0]);
      // setIsSelected(true);
    };


    //* update state based on form input changes
    const handlePasswordChange = (event) => {
      const { name, value } = event.target;

      // console.log("New Password = " + value)

      setPasswordState({
        ...passwordState,
        password: value,
        id: jwtToken.data._id,
      });

      // console.log("Password State = ");
      // console.log(passwordState);

    }

    //* update state based on form input changes
    const handleConfirmPasswordChange = (event) => {
      const { name, value } = event.target;

      // console.log("New Confirm Password = " + value)

      setPasswordState({
        ...passwordState,
        confirm: value,
        id: jwtToken.data._id,
      });

      // console.log("Password State = ");
      // console.log(passwordState);

    }

    //* ########################### Button Handle ###########################
    const HandleEmailSubmit = async (event) => {
      event.preventDefault();

      const emailFormData = event.target;
      const emailForm = new FormData(emailFormData);

      const tokenData = await updateEmail({
        variables: { 
          id: jwtToken.data._id,
          memberEmail: emailForm.get("memberEmail"),
      },
      });

      //TODO: Add Notification Email Updated
      // toast.success("Email Address Has Been Updated!", toastOptions);
      // console.log("Email Address Has Been Updated!");

      //* Generate Updated JWT Token
      Auth.login(JSON.stringify(tokenData.data.updateEmail));

      //* Refresh Page to grab updated data from stored JWT token
      window.location.reload(false);

    }

    
    const HandlePasswordSubmit = async (event) => {
      event.preventDefault();

      const { name, value } = event.target;

      // console.log("New Password Submitted!")
      // console.log("   Password: " + passwordState.password)
      // console.log("   Confirm : " + passwordState.confirm)

      if( passwordState.password === passwordState.confirm){
        const tokenData = await updatePass({
          variables: { ...passwordState },
        });

        // console.log(tokenData)
        
        // toast.success("Password Has Been Updated!", toastOptions);
        // window.location.reload(false);
        
        //* Generate Updated JWT Token
        Auth.login(JSON.stringify(tokenData.data.updatePassword));

        //* Refresh Page to grab updated data from stored JWT token
        window.location.reload(false);

      }
      else {

        console.log("Password/Confirm Password DO NOT MATCH! Update Unsuccessful!");

      }

    }

    const HandleNameSubmit = async (event) => {
      event.preventDefault();

      const updateNameData = event.target;
      const nameForm = new FormData(updateNameData);

      const tokenData = await updateName({
        variables: { 
          id: jwtToken.data._id,
          memberFirstName: nameForm.get("memberFirstName"),
          memberLastName: nameForm.get("memberLastName"),
      },
      });

      console.log("TOKEN DATA")
      console.log(tokenData)

      //* Generate Updated JWT Token
      Auth.login(JSON.stringify(tokenData.data.updateName));

      //* Refresh Page to grab updated data from stored JWT token
      window.location.reload(false);

    }

    const HandleProfilePictureUpload = async (event) => {
      // event.preventDefault();

      //* Request secure URL for upload from AWS/S3 via graphQL
      const URLdata = await getSecureURL({
        variables: { userId: jwtToken.data._id},
      });
  
      console.log("Secure URL: " + URLdata.data.uploadUserProfilePicture.secureUploadURL);

      //* Use parsed/clean URL to submit PUT request to S3 server
      const response = await fetch(
        URLdata.data.uploadUserProfilePicture.secureUploadURL,
        {
          method: 'PUT',
          body: selectedFile,
          headers: {
            "Content-Type": "image/jpeg",
          },
        }
      )

      // console.log(response.status);

      //* After Fetch is complete reload page to display new user Profile Picture
      if(response.status == 200){
        window.location.reload(false);
      }
      else{
        //TODO: Add error handling for failed upload!
      }

    }

    const handleLogout = async (event) => {
      // event.preventDefault();

      let confirmCheck = confirm("Are you sure you want to logout?");

      if(confirmCheck) {
      
        //*Logout by Deleting JWT Token
        Auth.logout();

        navigate("/");
        location.reload()
        window.scrollTo(0, 0);
      }
    };

    return (

      <div className="d-flex flex-column min-vh-100">
        <header className="">
          <Header />
        </header>

        {/* Weather Widget Component */}
        <WeatherWidget />
        
        <h1 className="editProfileText text-center mt-5">{jwtToken.data.memberFirstName} {jwtToken.data.memberLastName}</h1>
        <h3 className="editProfileText text-center"> Welcome to your Board Club Profile!</h3>
        
        <div className="mx-2 text-center">
          <div className="my-3">
            <div className="text-center">
              <img src={"https://theboardclubprofilepictures.s3.us-west-1.amazonaws.com/" + jwtToken.data._id + ".jpg"}
                className="avatarIcon"
              alt="User Icon" />
            </div>
          </div>
          {/* <button type="button" className="userProfileUpdateBtn p-2 mt-3 text-center" onClick={(event) => HandleProfilePictureUpload(event)}>Upload Profile Picture</button> */}
          <div className="mt-3">
            <input className="p-2 uploadBox" type="file" name="profilePictureFile" onChange={fileChangeHandler} />
          </div>
          <button className="mt-3 py-2 userProfileUpdateBtn" onClick={(event) => HandleProfilePictureUpload(event)}>Upload</button>
        </div>

        <form className="mx-5 mt-0 applyMainFont" onSubmit={HandleNameSubmit}>

          <div className="form-group mx-2 my-5 text-center">
            <label htmlFor="exampleInputEmail1">Member Name</label>
            <input 
              type="text" 
              className="form-control" 
              id="memberFirstName" 
              placeholder={jwtToken.data.memberFirstName}
              name="memberFirstName">
            </input>
            <input 
              type="text" 
              className="form-control mt-2" 
              id="memberLastName" 
              placeholder={jwtToken.data.memberLastName} 
              name="memberLastName">
              </input>
            {/* <button type="button" className="userProfileUpdateBtn p-2 mt-3 text-center" onClick={(event) => HandleNameSubmit(event)}>Update Name</button> */}
            <button type="button" className="userProfileUpdateBtn p-2 mt-3 text-center" type="submit">Update Name</button>
          </div>
        </form>

        <form className="mx-5 mt-0 applyMainFont" onSubmit={HandleEmailSubmit}>
          <div className="form-group mx-2 my-5 text-center">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="memberEmail" name="memberEmail" placeholder={jwtToken.data.memberEmail}></input>
            <button type="button" className="userProfileUpdateBtn p-2 mt-3 text-center" type="submit">Update Email</button>
          </div>
        </form>

        <form>
          <div className="form-group mx-2 my-5 text-center">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" onChange={(e) => handlePasswordChange(e)}></input>
            <label htmlFor="exampleInputPassword1" className="mt-3">Password Confirm</label>
            <input type="password" className="form-control" id="passwordConfirm" placeholder="Password" onChange={(e) => handleConfirmPasswordChange(e)}></input>
            <button type="button" className="userProfileUpdateBtn p-2 mt-3 mb-2 text-center" onClick={(event) => HandlePasswordSubmit(event)}>Update Password</button>
          </div>
          <div className="d-flex align-items-center justify-content-center mb-5 logoutBTNBox">
            <button type="button" className="btn btn-danger text-center mt-3 mb-3 logoutBTN" onClick={(event) => handleLogout(event)}>Log Out</button>   
          </div>
        </form>

        <footer className="mt-auto mb-0">
          <NavFooter />
        </footer>
      </div>
    )
  }
  else {

    return(
      <div className="d-flex flex-column align-items-center justify-content-center">

        <LoginPage />

      </div>   
    )
  }
  
}

export default UserSettings;