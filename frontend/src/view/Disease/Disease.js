import { Formik } from "formik";
import React from "react";
import DataTable from "react-data-table-component";
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";

function Disease() {
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
              <Formik>
                {(props) => (
                  <form>
                    <div className="row">
                      <div className="col-6 mb-4">
                        <label className="name fw-semibold">Disease Name</label>
                        <input
                          className="form-control mt-1"
                          name="disease"
                          placeholder="Disease Name..."
                        />
                      </div>
                      <div className="col-6 mb-4">
                        <label className="name fw-semibold">
                          Vaccine Count
                        </label>
                        <input
                          className="form-control mt-1"
                          name="vaccine_count"
                          placeholder="Vaccine Count..."
                        />
                      </div>
                      <div className="col-6 mb-4">
                        <label className="name fw-semibold">Location</label>
                        <input
                          className="form-control mt-1"
                          name="location"
                          placeholder="Location..."
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 d-flex justify-content-end">
                        <button type="button" className="btn btn-primary w-25">
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
