import { ErrorMessage, Formik } from "formik";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignInImg from "../../assets/img/login_bg.png";
import { auth } from "../../context/apiCalls";
import { MainContext } from "../../context/MainContext";
import * as Yup from "yup";

function SignIn() {
  const { dispatch } = useContext(MainContext);
  const Navigate = useNavigate();
  const [errMsg, setErrMsg] = useState("");

  const initalValue = {
    username: "",
    password: "",
  };

  /* eslint-disable */
  // Yup Validation
  let validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required!"),
    password: Yup.string().required("Password is required!"),
  });

  function signIn(data) {
    auth(data, dispatch)
      .then(() => {
        Navigate("/dashboard");
      })
      .catch((err) => {
        setErrMsg(err.response.data.error);
      });
  }

  console.log(errMsg);

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
          <Formik
            initialValues={initalValue}
            onSubmit={signIn}
            validationSchema={validationSchema}
          >
            {(props) => (
              <form className="w-100" onSubmit={props.handleSubmit}>
                <div className="row">
                  <div className="col-12 mb-4">
                    <label className="name fw-semibold">Username</label>
                    <input
                      className="form-control mt-1"
                      name="username"
                      placeholder="Username..."
                      value={props.values.username}
                      onChange={props.handleChange}
                    />
                    <ErrorMessage
                      name="username"
                      component="span"
                      className="error"
                    />
                  </div>
                  <div className="col-12">
                    <label className="name fw-semibold">Password</label>
                    <input
                      className="form-control mt-1"
                      name="password"
                      type="password"
                      placeholder="Password..."
                      value={props.values.password}
                      onChange={props.handleChange}
                    />
                    <ErrorMessage
                      name="password"
                      component="span"
                      className="error"
                    />
                  </div>
                </div>
                <div className="row mt-5">
                  <span className="error mb-3">{errMsg}</span>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100">
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
