const Header = () => {


  return (

    <div className="mt-auto mb-0">

      <div className="d-flex align-items-center justify-content-left">
        <div className="text-center">
          <img src={require("../../img/BC_Logo_Clear_1.png")}
            className="homePageLogo"
            alt="Board Club Logo" />
        </div>
        <h1 className="homeTitle text-center mt-5"> Branch Check!</h1>
      </div>
    </div>
  );
};

export default Header;


//!========================= EOF =========================