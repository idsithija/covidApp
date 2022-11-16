import { ErrorMessage, Formik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import * as Yup from "yup";
import { MainContext } from "../../context/MainContext";
import { addLocation, getLocations } from "../../context/apiCalls";

function AddLocation() {
  const { dispatch } = useContext(MainContext);
  const [locationsList, setLocationsList] = useState([]);

  useEffect(() => {
    getLocations(dispatch).then((response) => {
      setLocationsList(response.data);
    });
  }, [dispatch]);

  const columns = [
    {
      name: "Location Name",
      selector: (row) => row.location,
    },
    {
      name: "Latitude",
      selector: (row) => row.latitude,
    },
    {
      name: "Longitude",
      selector: (row) => row.longitude,
    },
  ];

  const initalValue = {
    location: "",
    latitude: "",
    longitude: "",
  };

  /* eslint-disable */
  // Yup Validation
  let validationSchema = Yup.object().shape({
    location: Yup.string().required("Location Name is required!"),
    latitude: Yup.string().required("Latitude is required!"),
    longitude: Yup.string().required("Longitude is required!"),
  });

  function sendData(data) {
    addLocation(data, dispatch);
    window.location.reload();
  }

  return (
    <>
      <SideBar />
      <TopBar />
      <div className="layout-body">
        <div className="layout-container">
          <div className="shadow-sm p-3 mb-5 bg-white rounded filter-page">
            <h1 className="title">Locations</h1>
            <DataTable
              className="mt-4"
              columns={columns}
              data={locationsList}
            />
          </div>
          <div className="shadow-sm p-3 bg-white rounded filter-page">
            <h1 className="title">Add Location</h1>
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
                          Location Name
                        </label>
                        <input
                          className="form-control mt-1"
                          name="location"
                          placeholder="Location Name..."
                          value={props.values.location}
                          onChange={props.handleChange}
                        />
                        <ErrorMessage
                          name="location"
                          component="span"
                          className="error"
                        />
                      </div>
                      <div className="col-6 mb-4">
                        <label className="name fw-semibold">
                          Latitude Count
                        </label>
                        <input
                          className="form-control mt-1"
                          name="latitude"
                          placeholder="Latitude..."
                          value={props.values.latitude}
                          onChange={props.handleChange}
                        />
                        <ErrorMessage
                          name="latitude"
                          component="span"
                          className="error"
                        />
                      </div>
                      <div className="col-6 mb-4">
                        <label className="name fw-semibold">Longitude</label>
                        <input
                          className="form-control mt-1"
                          name="longitude"
                          placeholder="Longitude..."
                          value={props.values.longitude}
                          onChange={props.handleChange}
                        />
                        <ErrorMessage
                          name="longitude"
                          component="span"
                          className="error"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 d-flex justify-content-end">
                        <button type="submit" className="btn btn-primary w-25">
                          Add Location
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

export default AddLocation;
