import { ErrorMessage, Formik } from "formik";
import React, { useContext } from "react";
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import * as Yup from "yup";
import { MainContext } from "../../context/MainContext";
import { addDetailes } from "../../context/apiCalls";
import { useNavigate } from "react-router-dom";

function UserSettings() {
  const { user, dispatch } = useContext(MainContext);
  const Navigate = useNavigate();
  const initialValues = {
    nic: "",
    dob: "",
    gender: "",
    bloodgroup: "",
    addressline1: "",
    addressline2: "",
    district: "",
    city: "",
    province: "",
    homephone: "",
    mobilephone: "",
  };

  /* eslint-disable */
  // Yup Validation
  let validationSchema = Yup.object().shape({
    nic: Yup.string().required("Nic is required!"),
    dob: Yup.string().required("Date of Brith is required!"),
    gender: Yup.string().required("Gender is required!"),
    bloodgroup: Yup.string().required("Blood Group is required!"),
    addressline1: Yup.string().required("Address Line 01 is required!"),
    addressline2: Yup.string().required("Address Line 02 required!"),
    district: Yup.string().required("Distric is required!"),
    city: Yup.string().required("City is required!"),
    province: Yup.string().required("Province is required!"),
    homephone: Yup.string().required("Home phone is required!"),
    mobilephone: Yup.string().required("Mobile phone is required!"),
  });

  function addDetailesForm(data) {
    var dataNew = {
      ...data,
      userid: user.id,
      usertype: user.usertype,
      fullname: user.fullname,
    };
    addDetailes(user.id, dataNew, dispatch).then(() => {
      Navigate("/settings");
    });
  }

  return (
    <>
      <SideBar />
      <TopBar />
      <div className="layout-body">
        <div className="layout-container">
          <div className="shadow-sm p-3 mb-5 bg-white rounded filter-page">
            <h1 className="title">Details</h1>
            <div className="mt-4">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={addDetailesForm}
              >
                {(props) => (
                  <form onSubmit={props.handleSubmit}>
                    <div className="row">
                      <div className="col-4 mb-4">
                        <label className="name fw-semibold">NIC</label>
                        <input
                          className="form-control mt-1"
                          name="nic"
                          placeholder="NIC..."
                          value={props.values.nic}
                          onChange={props.handleChange}
                        />
                        <ErrorMessage
                          name="nic"
                          component="span"
                          className="error"
                        />
                      </div>
                      <div className="col-4 mb-4">
                        <label className="name fw-semibold">
                          Date of Birth
                        </label>
                        <input
                          className="form-control mt-1"
                          name="dob"
                          placeholder="Date of Brith..."
                          value={props.values.dob}
                          onChange={props.handleChange}
                        />
                        <ErrorMessage
                          name="dob"
                          component="span"
                          className="error"
                        />
                      </div>
                      <div className="col-4 mb-4">
                        <label className="name fw-semibold">Gender</label>
                        <input
                          className="form-control mt-1"
                          name="gender"
                          placeholder="Gender..."
                          value={props.values.gender}
                          onChange={props.handleChange}
                        />
                        <ErrorMessage
                          name="gender"
                          component="span"
                          className="error"
                        />
                      </div>
                      <div className="col-4 mb-4">
                        <label className="name fw-semibold">Blood Group</label>
                        <input
                          className="form-control mt-1"
                          name="bloodgroup"
                          placeholder="Blood Group..."
                          value={props.values.bloodgroup}
                          onChange={props.handleChange}
                        />
                        <ErrorMessage
                          name="bloodgroup"
                          component="span"
                          className="error"
                        />
                      </div>
                      <div className="col-4 mb-4">
                        <label className="name fw-semibold">
                          Address Line 01
                        </label>
                        <input
                          className="form-control mt-1"
                          name="addressline1"
                          placeholder="Address Line 01..."
                          value={props.values.addressline1}
                          onChange={props.handleChange}
                        />
                        <ErrorMessage
                          name="addressline1"
                          component="span"
                          className="error"
                        />
                      </div>
                      <div className="col-4 mb-4">
                        <label className="name fw-semibold">
                          Address Line 02
                        </label>
                        <input
                          className="form-control mt-1"
                          name="addressline2"
                          placeholder="Address Line 02..."
                          value={props.values.addressline2}
                          onChange={props.handleChange}
                        />
                        <ErrorMessage
                          name="addressline2"
                          component="span"
                          className="error"
                        />
                      </div>
                      <div className="col-4 mb-4">
                        <label className="name fw-semibold">District</label>
                        <input
                          className="form-control mt-1"
                          name="district"
                          placeholder="District..."
                          value={props.values.district}
                          onChange={props.handleChange}
                        />
                        <ErrorMessage
                          name="district"
                          component="span"
                          className="error"
                        />
                      </div>
                      <div className="col-4 mb-4">
                        <label className="name fw-semibold">City</label>
                        <input
                          className="form-control mt-1"
                          name="city"
                          placeholder="City..."
                          value={props.values.city}
                          onChange={props.handleChange}
                        />
                        <ErrorMessage
                          name="city"
                          component="span"
                          className="error"
                        />
                      </div>
                      <div className="col-4 mb-4">
                        <label className="name fw-semibold">Province</label>
                        <input
                          className="form-control mt-1"
                          name="province"
                          placeholder="Province..."
                          value={props.values.province}
                          onChange={props.handleChange}
                        />
                        <ErrorMessage
                          name="province"
                          component="span"
                          className="error"
                        />
                      </div>
                      <div className="col-4 mb-4">
                        <label className="name fw-semibold">Home Phone</label>
                        <input
                          className="form-control mt-1"
                          name="homephone"
                          placeholder="Home Phone..."
                          value={props.values.homephone}
                          onChange={props.handleChange}
                        />
                        <ErrorMessage
                          name="homephone"
                          component="span"
                          className="error"
                        />
                      </div>
                      <div className="col-4 mb-4">
                        <label className="name fw-semibold">Mobile Phone</label>
                        <input
                          className="form-control mt-1"
                          name="mobilephone"
                          placeholder="Mobile Phone..."
                          value={props.values.mobilephone}
                          onChange={props.handleChange}
                        />
                        <ErrorMessage
                          name="mobilephone"
                          component="span"
                          className="error"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 d-flex justify-content-end">
                        <button type="submit" className="btn btn-primary w-25">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserSettings;
