import { Formik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SignInImg from "../../assets/img/login_bg.png";

function SignIn() {
  const Navigate = useNavigate();

  const goDashboard = () => {
    Navigate("/dashboard");
  };
  return (
    <div className="vh-100 d-flex">
      <div className="col-8 h-100 main-color login-p-l">
        <div className="h-100 d-flex justify-content-center align-items-center flex-column">
          <h2 className="title-color text-uppercase mb-5 fw-normal">
            Dashboard
          </h2>
          <img className="sign-in-img mt-5" src={SignInImg} alt="signIn" />
        </div>
      </div>
      <div className="col-4 h-100">
        <div className="h-100 d-flex justify-content-center align-items-center flex-column p-5">
          <h2 className="mb-5 sing-in-right-title fw-bold">
            Sign In to Dashboard
          </h2>
          <Formik>
            {(props) => (
              <form className="w-100">
                <div className="row">
                  <div className="col-12 mb-4">
                    <label className="name fw-semibold">Email Address</label>
                    <input
                      className="form-control mt-1"
                      name="email"
                      placeholder="Email Address..."
                    />
                  </div>
                  <div className="col-12">
                    <label className="name fw-semibold">Password</label>
                    <input
                      className="form-control mt-1"
                      name="password"
                      placeholder="Password..."
                    />
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-12">
                    <button
                      type="button"
                      className="btn btn-primary w-100"
                      onClick={() => goDashboard()}
                    >
                      Sign In
                    </button>
                  </div>
                  <div className="col-12 fw-light text-center mt-2">
                    Don't have an account?
                    <span className="title-color fw-normal cp ms-2">
                      <Link to="/register">Sign up now</Link>
                    </span>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
