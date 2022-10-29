import { ErrorMessage, Formik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import * as Yup from "yup";
import { MainContext } from "../../context/MainContext";
import { addDisease, getDiseases } from "../../context/apiCalls";

function Disease() {
  const { user, dispatch } = useContext(MainContext);
  const [diseasesList, setDiseasesList] = useState([]);

  useEffect(() => {
    getDiseases(dispatch).then((response) => {
      setDiseasesList(response.data);
    });
  }, [dispatch]);

  console.log(diseasesList);

  const columns = [
    {
      name: "Disease Name",
      selector: (row) => row.title,
    },
    {
      name: "Count",
      selector: (row) => row.count,
    },
    {
      name: "Location",
      selector: (row) => row.location,
    },
  ];

  const data = [
    {
      id: 1,
      title: "Covid disease",
      count: "100000",
      location: "China",
    },
    {
      id: 2,
      title: "Disease 01",
      count: "600000",
      location: "India",
    },
  ];

  const initalValue = {
    diseasename: "",
    count: "",
    location: "",
  };

  /* eslint-disable */
  // Yup Validation
  let validationSchema = Yup.object().shape({
    diseasename: Yup.string().required("Disease Name is required!"),
    count: Yup.string().required("Count is required!"),
    location: Yup.string().required("Location is required!"),
  });

  function sendData(data) {
    var dataNew = { ...data, userid: user.id };
    addDisease(dataNew, dispatch);
  }

  return (
    <>
      <SideBar />
      <TopBar />
      <div className="layout-body">
        <div className="layout-container">
          <div className="shadow-sm p-3 mb-5 bg-white rounded filter-page">
            <h1 className="title">Disease</h1>
            <DataTable className="mt-4" columns={columns} data={data} />
          </div>
          <div className="shadow-sm p-3 bg-white rounded filter-page">
            <h1 className="title">Add Disease</h1>
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
                        <label className="name fw-semibold">Disease Name</label>
                        <input
                          className="form-control mt-1"
                          name="diseasename"
                          placeholder="Disease Name..."
                          value={props.values.diseasename}
                          onChange={props.handleChange}
                        />
                        <ErrorMessage
                          name="diseasename"
                          component="span"
                          className="error"
                        />
                      </div>
                      <div className="col-6 mb-4">
                        <label className="name fw-semibold">
                          Vaccine Count
                        </label>
                        <input
                          className="form-control mt-1"
                          name="count"
                          placeholder="Vaccine Count..."
                          value={props.values.count}
                          onChange={props.handleChange}
                        />
                        <ErrorMessage
                          name="count"
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

export default Disease;
