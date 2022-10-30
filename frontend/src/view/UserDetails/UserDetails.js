import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useLocation } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import * as Yup from "yup";
import { ErrorMessage, Formik } from "formik";
import { addVaccine, getVaccines } from "../../context/apiCalls";
import { MainContext } from "../../context/MainContext";

function UserDetails() {
  const { dispatch } = useContext(MainContext);
  const { state } = useLocation();
  const [vaccineList, setVaccineList] = useState([]);

  useEffect(() => {
    getVaccines(state.userid, dispatch).then((response) => {
      setVaccineList(response.data);
    });
  }, [dispatch, state.userid]);

  const columns = [
    {
      name: "Vaccine Name",
      selector: (row) => row.vaccinename,
    },
    {
      name: "Vaccinated Dose",
      selector: (row) => row.vaccinedose,
    },
    {
      name: "Expire Date",
      selector: (row) => row.expireDate,
    },
  ];

  const initalValue = {
    vaccinename: "",
    vaccinedose: "",
  };

  /* eslint-disable */
  // Yup Validation
  let validationSchema = Yup.object().shape({
    vaccinename: Yup.string().required("Vaccine Name is required!"),
    vaccinedose: Yup.string().required("Vaccine Dose is required!"),
  });

  function sendData(data) {
    var dataNew = { ...data, userid: state.userid };
    addVaccine(dataNew, dispatch);
  }

  return (
    <>
      <SideBar />
      <TopBar />
      <div className="layout-body">
        <div className="layout-container">
          <div className="shadow-sm p-3 mb-5 bg-white rounded filter-page">
            <h1 className="title">User Details</h1>
            <div className="welcome-title title-color mt-3">
              Current Status of {state.username}...
            </div>
            <div className="mt-3">
              You need to vaccinete {vaccineList.length + 1} dose at{" "}
              {vaccineList[vaccineList.length - 1] !== undefined
                ? vaccineList[vaccineList.length - 1].expireDate
                : null}
              .
            </div>
            <DataTable className="mt-4" columns={columns} data={vaccineList} />
          </div>
          <div className="shadow-sm p-3 mb-5 bg-white rounded">
            <ul className="mt-2 mb-2 row">
              <li className="mb-3 col-6">
                Full Name :
                <span className="title-color ms-4">{state.fullname}</span>
              </li>
              <li className="mb-3 col-6">
                Date of Birth :
                <span className="title-color ms-4">{state.dob}</span>
              </li>
              <li className="mb-3 col-6">
                NIC :<span className="title-color ms-4">{state.nic}</span>
              </li>
              <li className="mb-3 col-6">
                Gender :<span className="title-color ms-4">{state.gender}</span>
              </li>
              <li className="col-6">
                Blood Group :
                <span className="title-color ms-4">{state.bloodgroup}</span>
              </li>
              <li className="col-6">
                Phone Number :
                <span className="title-color ms-4">{state.mobilephone}</span>
              </li>
            </ul>
          </div>
          <div className="shadow-sm p-3 bg-white rounded filter-page">
            <h1 className="title">Add Vaccine</h1>
            <div className="mt-3">
              <Formik
                initialValues={initalValue}
                onSubmit={sendData}
                validationSchema={validationSchema}
              >
                {(props) => (
                  <form onSubmit={props.handleSubmit}>
                    <div className="row">
                      <div className="col-6 mb-4">
                        <label className="name fw-semibold">Vaccine Name</label>
                        <input
                          className="form-control mt-1"
                          name="vaccinename"
                          placeholder="Vaccine Name..."
                          value={props.values.vaccinename}
                          onChange={props.handleChange}
                        />
                        <ErrorMessage
                          name="vaccinename"
                          component="span"
                          className="error"
                        />
                      </div>
                      <div className="col-6 mb-4">
                        <label className="name fw-semibold">Vaccine Dose</label>
                        <input
                          className="form-control mt-1"
                          name="vaccinedose"
                          placeholder="Vaccine Dose..."
                          value={props.values.vaccinedose}
                          onChange={props.handleChange}
                        />
                        <ErrorMessage
                          name="vaccinedose"
                          component="span"
                          className="error"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 d-flex justify-content-end">
                        <button type="submit" className="btn btn-primary w-25">
                          Add Disease
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

export default UserDetails;
