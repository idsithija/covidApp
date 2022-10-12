import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import DataTable from "../../components/Table/DataTable";

function AdminSettings() {
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
            <h1 className="title">Admin Settings</h1>
            <DataTable className="mt-3" columns={columns} data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminSettings;
