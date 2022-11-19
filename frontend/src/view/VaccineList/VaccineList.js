import { ErrorMessage, Formik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import * as Yup from "yup";
import { MainContext } from "../../context/MainContext";
import { addVaccineList, getVaccineList } from "../../context/apiCalls";

function VaccineList() {
  const { user, dispatch } = useContext(MainContext);
  const [vaccineList, setVaccineList] = useState([]);

  useEffect(() => {
    getVaccineList(dispatch).then((response) => {
      setVaccineList(response.data);
    });
  }, [dispatch]);

  const columns = [
    {
      name: "Vaccine Name",
      selector: (row) => row.vaccinename,
    },
    {
      name: "Count",
      selector: (row) => row.count,
    },
    {
      name: "Province",
      selector: (row) => row.province,
    },
    {
      name: "Expire Date",
      selector: (row) => row.expireDate,
    },
  ];

  const initalValue = {
    vaccinename: "",
    count: "",
    province: "",
    expireDate: "",
  };

  /* eslint-disable */
  // Yup Validation
  let validationSchema = Yup.object().shape({
    vaccinename: Yup.string().required("Vaccine Name is required!"),
    count: Yup.string().required("Count is required!"),
    province: Yup.string().required("Province is required!"),
    expireDate: Yup.string().required("Expire Date is required!"),
  });

  function sendData(data) {
    addVaccineList(data, dispatch).then(() => {
      window.location.reload();
    });
  }
  return (
    <>
      <SideBar />
      <TopBar />
      <div className="layout-body">
        <div className="layout-container">
          <div className="shadow-sm p-3 mb-5 bg-white rounded filter-page">
            <h1 className="title">Vaccine List</h1>
            <DataTable className="mt-4" columns={columns} data={vaccineList} />
          </div>
          {user.usertype !== "USER" ? (
            <div className="shadow-sm p-3 bg-white rounded filter-page">
              <h1 className="title">Add Vaccine Data</h1>
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
                            Vaccine Name
                          </label>
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
                          <label className="name fw-semibold">Count</label>
                          <input
                            className="form-control mt-1"
                            name="count"
                            placeholder="Count..."
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
                        <div className="col-6 mb-4">
                          <label className="name fw-semibold">
                            Expire Date
                          </label>
                          <input
                            className="form-control mt-1"
                            name="expireDate"
                            placeholder="Expire Date..."
                            value={props.values.expireDate}
                            onChange={props.handleChange}
                          />
                          <ErrorMessage
                            name="expireDate"
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

export default VaccineList;
