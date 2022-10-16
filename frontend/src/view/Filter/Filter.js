import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import DataTable from "react-data-table-component";

function Filter() {
  const columns = [
    {
      name: "Patient name",
      selector: (row) => row.title,
    },
    {
      name: "Location",
      selector: (row) => row.year,
    },
    {
      name: "Address",
      selector: (row) => row.id,
    },
  ];

  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
  ];

  return (
    <>
      <SideBar />
      <TopBar />
      <div className="layout-body">
        <div className="layout-container">
          <div className="shadow-sm p-3 mb-5 bg-white rounded filter-page">
            <h1 className="title">Data</h1>
            <div className="filter-section mt-4">
              <div className="row flex-wrap mt-3 mb-3">
                <div className="col-3">
                  <label className="name">Name</label>
                  <input
                    className="form-control mt-1"
                    name="name"
                    placeholder="Name..."
                  />
                </div>
                <div className="col-3">
                  <label className="age">Age</label>
                  <input
                    className="form-control mt-1"
                    name="age"
                    placeholder="Age..."
                  />
                </div>
                <div className="col-3">
                  <label className="id">User Id</label>
                  <input
                    className="form-control mt-1"
                    name="userid"
                    placeholder="User Id..."
                  />
                </div>
                <div className="col-3">
                  <label className="location">Location</label>
                  <input
                    className="form-control mt-1"
                    name="location"
                    placeholder="Location..."
                  />
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-primary">
                  Filter
                </button>
                <button type="button" className="btn btn-outline-primary ms-3">
                  Clear
                </button>
              </div>
            </div>
            <DataTable columns={columns} data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
