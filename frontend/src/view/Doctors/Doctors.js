import { ErrorMessage, Formik } from "formik";
import React, { useContext, useEffect, useRef, useState } from "react";
import DataTable from "react-data-table-component";
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import * as Yup from "yup";
import { MainContext } from "../../context/MainContext";
import { addDoctors, getDoctors } from "../../context/apiCalls";

function Doctors() {
  const { user, dispatch } = useContext(MainContext);
  const [doctorList, setDoctorList] = useState([]);
  const nameRef = useRef();
  const locationRef = useRef();
  const [search, setSearch] = useState("");
  const [locationData, setLocationData] = useState("");

  useEffect(() => {
    getDoctors(dispatch).then((response) => {
      setDoctorList(response.data);
    });
  }, [dispatch]);

  const columns = [
    {
      name: "Doctor Name",
      selector: (row) => row.doctorname,
    },
    {
      name: "Illness",
      selector: (row) => row.illness,
    },
    {
      name: "Location",
      selector: (row) => row.location,
    },
    {
      name: "Phone Number",
      selector: (row) => row.phonenumber,
    },
  ];

  const initalValue = {
    doctorname: "",
    illness: "",
    location: "",
    phonenumber: "",
  };

  /* eslint-disable */
  // Yup Validation
  let validationSchema = Yup.object().shape({
    doctorname: Yup.string().required("Doctor Name is required!"),
    illness: Yup.string().required("Illness is required!"),
    phonenumber: Yup.string().required("Phone Number is required!"),
    location: Yup.string().required("Location is required!"),
  });

  function sendData(data) {
    addDoctors(data, dispatch).then(() => {
      window.location.reload();
    });
  }

  const handleSearch = (event) => {
    setSearch("" + event.target.value + "");
  };

  const handleSearchLocation = (event) => {
    setLocationData("" + event.target.value + "");
  };

  const clearFilter = () => {
    nameRef.current.value = "";
    locationRef.current.value = "";
    setSearch("");
    setLocationData("");
  };

  const userToShow =
    search || locationData
      ? doctorList.filter(function (doctor) {
          return (
            doctor.illness
              .toLowerCase()
              .indexOf("" + search.toLowerCase() + "") > -1 &&
            doctor.location
              .toLowerCase()
              .indexOf("" + locationData.toLowerCase() + "") > -1
          );
        })
      : doctorList;

  return (
    <>
      <SideBar />
      <TopBar />
      <div className="layout-body">
        <div className="layout-container">
          <div className="shadow-sm p-3 mb-5 bg-white rounded filter-page">
            <h1 className="title">Doctors</h1>
            <div className="filter-section mt-4">
              <div className="row flex-wrap mt-3 mb-3">
                <div className="col-3">
                  <label className="name">Illness</label>
                  <input
                    ref={nameRef}
                    className="form-control mt-1"
                    name="name"
                    placeholder="Illness..."
                    onChange={handleSearch}
                  />
                </div>
                <div className="col-3">
                  <label className="name">Location</label>
                  <input
                    ref={locationRef}
                    className="form-control mt-1"
                    name="location"
                    placeholder="Location..."
                    onChange={handleSearchLocation}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  className="btn btn-outline-primary ms-3"
                  onClick={clearFilter}
                >
                  Clear
                </button>
              </div>
            </div>
            <DataTable className="mt-4" columns={columns} data={userToShow} />
          </div>
          {user.usertype !== "USER" ? (
            <div className="shadow-sm p-3 bg-white rounded filter-page">
              <h1 className="title">Add Doctors</h1>
              <div className="mt-4">
                <Formik
                  initialValues={initalValue}
                  onSubmit={sendData}
                  validationSchema={validationSchema}
                >
                  {(props) => (
                    <form onSubmit={props.handleSubmit}>
                      <div className="row">
                        <div className="col-6 mb-4">
                          <label className="name fw-semibold">
                            Doctor Name
                          </label>
                          <input
                            className="form-control mt-1"
                            name="doctorname"
                            placeholder="Doctor Name..."
                            value={props.values.doctorname}
                            onChange={props.handleChange}
                          />
                          <ErrorMessage
                            name="doctorname"
                            component="span"
                            className="error"
                          />
                        </div>
                        <div className="col-6 mb-4">
                          <label className="name fw-semibold">Illness</label>
                          <input
                            className="form-control mt-1"
                            name="illness"
                            placeholder="Illness..."
                            value={props.values.illness}
                            onChange={props.handleChange}
                          />
                          <ErrorMessage
                            name="illness"
                            component="span"
                            className="error"
                          />
                        </div>
                        <div className="col-6 mb-4">
                          <label className="name fw-semibold">
                            Phone Number
                          </label>
                          <input
                            className="form-control mt-1"
                            name="phonenumber"
                            placeholder="Phone Number..."
                            value={props.values.phonenumber}
                            onChange={props.handleChange}
                          />
                          <ErrorMessage
                            name="phonenumber"
                            component="span"
                            className="error"
                          />
                        </div>
                        <div className="col-6 mb-4">
                          <label className="name fw-semibold">Location</label>
                          <input
                            className="form-control mt-1"
                            name="location"
                            placeholder="Location..."
                            value={props.values.location}
                            onChange={props.handleChange}
                          />
                          <ErrorMessage
                            name="location"
                            component="span"
                            className="error"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 d-flex justify-content-end">
                          <button
                            type="submit"
                            className="btn btn-primary w-25"
                          >
                            Add Doctor
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Doctors;
