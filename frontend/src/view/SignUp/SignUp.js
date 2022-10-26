import { ErrorMessage, Formik } from "formik";
import React, { useContext } from "react";
import SignUpImg from "../../assets/img/reg-bg.png";
import * as Yup from "yup";
import { MainContext } from "../../context/MainContext";
import { register } from "../../context/apiCalls";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const { dispatch } = useContext(MainContext);
  const Navigate = useNavigate();
  const initalValue = {
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  /* eslint-disable */
  // Yup Validation
  let validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Full Name is required!"),
    username: Yup.string().required("Username is required!"),
    email: Yup.string().required("Email is required!"),
    password: Yup.string().required("Password is required!"),
    confirm_password: Yup.string().required("Confirm password is required!"),
  });

  function signUp(data) {
    const values = {
      ...data,
      usertype: "USER",
    };
    register(values, dispatch).then(() => {
      Navigate("/");
    });
  }

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
          <Formik
            initialValues={initalValue}
            onSubmit={signUp}
            validationSchema={validationSchema}
          >
            {(props) => (
              <form className="w-100" onSubmit={props.handleSubmit}>
                <div className="row">
                  <div className="col-12 mb-4">
                    <label className="name fw-semibold">Full Name</label>
                    <input
                      className="form-control mt-1"
                      name="fullname"
                      placeholder="Your Name..."
                      value={props.values.fullname}
                      onChange={props.handleChange}
                    />
                    <ErrorMessage
                      name="fullname"
                      component="span"
                      className="error"
                    />
                  </div>
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
                  <div className="col-12 mb-4">
                    <label className="name fw-semibold">Email Address</label>
                    <input
                      className="form-control mt-1"
                      name="email"
                      placeholder="Email address..."
                      value={props.values.email}
                      onChange={props.handleChange}
                    />
                    <ErrorMessage
                      name="email"
                      component="span"
                      className="error"
                    />
                  </div>
                  <div className="col-12 mb-4">
                    <label className="name fw-semibold">Password</label>
                    <input
                      className="form-control mt-1"
                      name="password"
                      placeholder="Password..."
                      type="password"
                      value={props.values.password}
                      onChange={props.handleChange}
                    />
                    <ErrorMessage
                      name="password"
                      component="span"
                      className="error"
                    />
                  </div>
                  <div className="col-12">
                    <label className="name fw-semibold">Confirm Password</label>
                    <input
                      className="form-control mt-1"
                      name="confirm_password"
                      placeholder="Confirm Password..."
                      type="password"
                      value={props.values.confirm_password}
                      onChange={props.handleChange}
                    />
                    <ErrorMessage
                      name="confirm_password"
                      component="span"
                      className="error"
                    />
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100">
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
