

import Header from '../components/Header';
import NavFooter from '../components/NavFooter';
import WeatherWidget from "../components/WeatherWidget";

import { useState, useCallback } from 'react';
// import { SelectDatepicker } from 'react-select-datepicker';

// import { PASS_UPDATE, EMAIL_UPDATE, LOGIN_Q, NAME_UPDATE } from '../utils/mutations';
import { EMAIL_UPDATE, PASS_UPDATE, NAME_UPDATE } from '../utils/mutations';
import { getURLupload_Q } from '../utils/queries';
import { useMutation, useLazyQuery } from '@apollo/client';
import Auth from '../utils/auth';


function UserSettings() {

  const [emailState, setEmailState] = useState({ memberEmail: '', id: '' });
  const [passwordState, setPasswordState] = useState({ password: '', confirm: '', id: '' });
  const [nameState, setNameState] = useState({ memberFirstName: '', memberLastName: '', id: '' });

  const [updatePass, { passData }] = useMutation(PASS_UPDATE);
  const [updateEmail, { emailData }] = useMutation(EMAIL_UPDATE);
  const [updateName, { nameData }] = useMutation(NAME_UPDATE);

  const [getSecureURL, { secureURLdata } ] = useLazyQuery(getURLupload_Q);
  // const [file, setFile] = useState(null);
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

  
  //* Handle Profile Picture to be uploaded
  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   setFile(file);
  // };

  const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		// setIsSelected(true);
	};

  //* update state based on form input changes
  const handleEmailChange = (event) => {
    const { name, value } = event.target;

    // console.log("New Email = " + value)
    // console.log("Name = " + name)

    setEmailState({
      ...emailState,
      memberEmail: value,
      id: jwtToken.data._id,
    });

    // console.log("Email State = ")
    // console.log(emailState)

  }

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

  //* update state based on form input changes
  const handleFirstNameChange = (event) => {
    const { name, value } = event.target;

    // console.log("New First Name = " + value)

    setNameState({
      ...nameState,
      memberFirstName: value,
      id: jwtToken.data._id,
    });

    // console.log("Name State = ")
    // console.log(nameState)

  }

  //* update state based on form input changes
  const handleLastNameChange = (event) => {
    const { name, value } = event.target;

    // console.log("New Last Name = " + value)

    setNameState({
      ...nameState,
      memberLastName: value,
      id: jwtToken.data._id,
    });

    // console.log("Name State = ")
    // console.log(nameState)

  }

  //* ########################### Button Handle ###########################
  const HandleEmailSubmit = async (event) => {
    event.preventDefault();

    const { name, value } = event.target;

    console.log("New Email Submitted!")
    // console.log(JSON.stringify(emailState))
    console.log("   " + emailState.memberEmail)
    // console.log(name)
    // console.log(value)

    const  tokenData = await updateEmail({
      variables: { ...emailState },
    });

    // const { data } = await loginTwo({
    //   variables: { email: emailState.email, password: login.user.password },
    // });

    // Auth.login(JSON.stringify(data2.login))

    // toast.success("Email Address Has Been Updated!", toastOptions);
    console.log("Email Address Has Been Updated!");

    //* Generate Updated JWT Token
    Auth.login(JSON.stringify(tokenData.data.updateEmail));

    //* Refresh Page to grab updated data from stored JWT token
    window.location.reload(false);


    // window.location.reload(false);

  }

  
  const HandlePasswordSubmit = async (event) => {
    event.preventDefault();

    const { name, value } = event.target;

    console.log("New Password Submitted!")
    console.log("   Password: " + passwordState.password)
    console.log("   Confirm : " + passwordState.confirm)

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

    const { name, value } = event.target;

    console.log("New Name Submitted!")
    console.log("   First Name: " + nameState.memberFirstName)
    console.log("   Last Name: " + nameState.memberLastName)

    const tokenData = await updateName({
      variables: { ...nameState },
    });

    // console.log("Token Data = " + JSON.stringify(tokenData.data.updateName))

    // console.log(nameData)

    // toast.success("Name Has Been Updated!", toastOptions);

    //* Generate Updated JWT Token
    Auth.login(JSON.stringify(tokenData.data.updateName));

    //* Refresh Page to grab updated data from stored JWT token
    window.location.reload(false);

  }

  //* Get Event Data from App Server
  // var { loading, data } = await useQuery(getURLupload_Q, {
  //   variables: { userId: jwtToken.data._id },
  // });

  const HandleProfilePictureUpload = async (event) => {
    event.preventDefault();




    console.log("Request Secure upload URL from S3 via GraphQL");

    // const secureURL = await getSecureURL({
    //   userId: jwtToken.data._id
    // })
      //* Get requested Event from Database
    const URLdata = await getSecureURL({
      variables: { userId: jwtToken.data._id},
    });

    // if(!loading){
      
    let parsedUploadURL = URLdata.data.uploadUserProfilePicture.split(`https:`)

    parsedUploadURL = "https:" + parsedUploadURL[1];
    parsedUploadURL = parsedUploadURL.substring(0, parsedUploadURL.length - 2)
      
      console.log("Raw Data: " + JSON.stringify(URLdata.data));
      console.log("Secure URL: " + parsedUploadURL);

    // }
    
    const formData = new FormData();

    // formData.append('File', selectedFile);

    fetch(
      parsedUploadURL,
			{
				method: 'PUT',
				body: selectedFile,
        headers: {
          "Content-Type": "image/jpeg",
          // 'Content-Type': 'application/x-www-form-urlencoded',
    },
			}
		)

      //* Get Event Data from App Server
      // var { loading, data } = await useQuery(getURLupload_Q, {
      //   variables: { userId: jwtToken.data._id },
      // });
      // // var { loading, data } = useQuery(getURLupload_Q)

      // if(!loading) {
      //   console.log("Secure URL: " + data)
      // }

  }

  console.log("https://theboardclubprofilepictures.s3.us-west-1.amazonaws.com/" + jwtToken.data._id + ".jpg")

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
            {/* <img src={require("../img/Avatar.jpg")} */}
            {/* <img src={"https://theboardclubprofilepictures.s3.us-west-1.amazonaws.com/3IZYnXSkBOn34JYpONvfetWnW.jpg"} */}
            <img src={"https://theboardclubprofilepictures.s3.us-west-1.amazonaws.com/" + jwtToken.data._id + ".jpg"}
              className="avatarIcon"
            alt="User Icon" />
          </div>
        </div>
        {/* <button type="button" className="userProfileUpdateBtn p-2 mt-3 text-center" onClick={(event) => HandleProfilePictureUpload(event)}>Upload Profile Picture</button> */}
        <div>
          <input type="file" name="profilePictureFile" onChange={changeHandler} />
          {/* <button onClick={uploadFile}>Upload</button> */}
          <button onClick={(event) => HandleProfilePictureUpload(event)}>Upload</button>
        </div>
      </div>

      <form className="mx-5 mt-0 applyMainFont mb-5">

        <div className="form-group mx-2 my-5 text-center">
          <label htmlFor="exampleInputEmail1">Member Name</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={jwtToken.data.memberFirstName} onChange={(e) => handleFirstNameChange(e)}></input>
          <input type="email" className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={jwtToken.data.memberLastName} onChange={(e) => handleLastNameChange(e)}></input>
          <button type="button" className="userProfileUpdateBtn p-2 mt-3 text-center" onClick={(event) => HandleNameSubmit(event)}>Update Name</button>
        </div>
        <div className="form-group mx-2 my-5 text-center">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={jwtToken.data.memberEmail} onChange={(e) => handleEmailChange(e)}></input>
          <button type="button" className="userProfileUpdateBtn p-2 mt-3 text-center" onClick={(event) => HandleEmailSubmit(event)}>Update Email</button>
        </div>
        <div className="form-group mx-2 my-5 text-center">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => handlePasswordChange(e)}></input>
          <label htmlFor="exampleInputPassword1" className="mt-3">Password Confirm</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => handleConfirmPasswordChange(e)}></input>
          <button type="button" className="userProfileUpdateBtn p-2 mt-3 mb-5 text-center" onClick={(event) => HandlePasswordSubmit(event)}>Update Password</button>
        </div>
       <div className="form-group mx-2 my-5">

        </div>
        {/* <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1">
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div> */}
        {/* <div className="">
          <p className="text-center dateOBText">Date Of Birth</p>
          <div className="row datePicker text-center">
            <SelectDatepicker
              selectedDate={datevalue}
              onDateChange={onDateChange}
              className="d-flex mt-3 row justify-content-center align-items-center"
            />
          </div>
        </div> */}
        <div className="d-flex align-items-center justify-content-center">
         {/* <button type="submit" className="btn btn-primary text-center mx-5 mt-3 mb-5 editSpacer">Submit</button>  */}
         
         {/* <button type="submit" className="profileSaveBtn text-center mx-5 mt-3 mb-5 editSpacer p-3">Save Changes</button>  */}
        </div>
      </form>

      <footer className="mt-auto mb-0">
        <NavFooter />
      </footer>
    </div>
  )

}

export default UserSettings;