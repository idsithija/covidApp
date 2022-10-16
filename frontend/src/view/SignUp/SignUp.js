import { Formik } from "formik";
import React from "react";
import SignUpImg from "../../assets/img/reg-bg.png";

function SignUp() {
  return (
    <div className="vh-100 d-flex">
      <div className="col-8 h-100 main-color login-p-l">
        <div className="h-100 d-flex justify-content-center align-items-center flex-column">
          <h2 className="title-color text-uppercase mb-5 fw-normal">
            Register
          </h2>
          <img className="sign-in-img mt-5" src={SignUpImg} alt="signIn" />
        </div>
      </div>
      <div className="col-4 h-100">
        <div className="h-100 d-flex justify-content-center align-items-center flex-column p-5">
          <h2 className="mb-5 sing-in-right-title fw-bold">
            Sign Up to Register
          </h2>
          <Formik>
            {(props) => (
              <form className="w-100">
                <div className="row">
                  <div className="col-12 mb-4">
                    <label className="name fw-semibold">Your Name</label>
                    <input
                      className="form-control mt-1"
                      name="name"
                      placeholder="Your Name..."
                    />
                  </div>
                  <div className="col-12 mb-4">
                    <label className="name fw-semibold">Email Address</label>
                    <input
                      className="form-control mt-1"
                      name="email"
                      placeholder="Email address..."
                    />
                  </div>
                  <div className="col-12 mb-4">
                    <label className="name fw-semibold">Password</label>
                    <input
                      className="form-control mt-1"
                      name="password"
                      placeholder="Password..."
                    />
                  </div>
                  <div className="col-12">
                    <label className="name fw-semibold">Confirm Password</label>
                    <input
                      className="form-control mt-1"
                      name="confirm_password"
                      placeholder="Confirm Password..."
                    />
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-12">
                    <button type="button" className="btn btn-primary w-100">
                      Sign Up
                    </button>
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

export default SignUp;
