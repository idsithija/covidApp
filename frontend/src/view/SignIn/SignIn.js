import React from "react";
import SignInImg from "../../assets/img/login_bg.png";

function SignIn() {
  return (
    <div className="vh-100 d-flex">
      <div className="col-8 h-100 main-color login-p-l">
        <div className="h-100 d-flex justify-content-center align-items-center flex-column">
          <h2 className="title-color text-uppercase mb-5">Dashboard</h2>
          <img className="sign-in-img mt-5" src={SignInImg} alt="signIn" />
        </div>
      </div>
      <div className="col-4 h-100"></div>
    </div>
  );
}

export default SignIn;
