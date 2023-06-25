

import { useNavigate } from "react-router-dom";




const Login = (props) => {


    const navigate = useNavigate();

  //* ########################### Button Handle ###########################
  const handleSubmit = async (event) => {
    event.preventDefault();

    // console.log("Handle Submit!")
    // console.log(formState);

    navigate("/Home")

    // try {
    //   const { data } = await login({
    //     variables: { ...formState },
    //   });

    //   Auth.login(JSON.stringify(data.login));

    //   console.log("Admin Status: " + data.login.admin)

    //   navigate("/main_Menu")
    //   toast.success("Login Successful!", toastOptions);

    //   if (data.login.admin) {
    //     toast.warn("Admin Access!", toastOptions);
    //     Auth.adminSet(true)
    //   }

    // } catch (e) {
    //   toast.error("Login Failed!", toastOptions);
    //   // console.error(e);
    // }

    // clear form values
    // setFormState({
    //   email: '',
    //   password: '',
    // });

  };

  const newUserRegister = async (event) => {
    event.preventDefault();

    navigate("/userRegister");

  };

  const passwordReset = async (event) => {
    event.preventDefault();

    navigate("/passwordReset");

  };


//* ########################### RETURN ###########################

  return (
 <div className="d-flex flex-column w-100">

      <div className="row d-flex align-items-center justify-content-center">

        <div className="col-12 mt-3 text-center ">
          <img src={require("../img/BC_Logo_Clear_1.png")}
            className="logo"
            alt="Salt Lick logo" />
        </div>

        <div className="mid col loginBox mx-5">

          <form className="welcome">
            {/* <h1 className="text-center welcometo mt-2">Welcome to</h1> */}
            {/* <h1 className="homeTitle text-center mt-4"> The Board Club</h1> */}

            <div className="text-center mt-3">
              <div className="inputdiv loginTextLabel">
                <p className="inputlabel">Email:</p>
                <div className="">
                  <input
                    className="startinputs loginTextBox"
                    type="text"
                    id="email"
                    name="email"
                    placeholder=""
                    onChange={(e) => handleChange(e)}
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
                    placeholder=""
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div>
                <p className="passwordRecoveryLink mb-3 mt-4" onClick={(event) => passwordReset(event)}>Forgot Password?</p>
              </div>
            </div>
          </form>

        </div >
        <div className="btndiv text-center">
          <button className="startbtns loginBTN" type="button" action="" onClick={(event) => handleSubmit(event)}>Log in</button>
          {/* <h4 className="h2 m-0 p-0">or</h4> */}
          <button className="startbtns registerBTN" type="button" onClick={(event) => newUserRegister(event)}>New Member Registration</button>
        </div>
      </div >

      <footer className="d-flex justify-content-center mt-auto footerLogin">
        <div className="d-flex align-items-left mt-auto pt-2 px-2 pb-1 justify-content-around contactFooter">
          <div className="d-flex flex-column">
            <a href="https://github.com/DesertCow">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000000" className="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
          </div>
          {/* <MainFooter /> */}
          <div className="companyName d-flex justify-content-center align-items-center">🙉 Monkey See Monkey Do LLC. 🙊</div>
          <div className="d-flex flex-column">
            <a href="https://desertcow.github.io/Portfolio/">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000000" className="bi bi-person-badge-fill" viewBox="0 0 16 16">
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>

    </div>

  )


}


export default Login;

//!========================= EOF =========================