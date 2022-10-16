import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";

function Locations() {
  const columns = [
    {
      name: "Vaccine Name",
      selector: (row) => row.title,
    },
    {
      name: "Location",
      selector: (row) => row.year,
    },
    {
      name: "Action",
      selector: (row) => row.id,
    },
  ];

  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "Colombo",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "Panadura",
    },
  ];

  useEffect(() => {
    const ifameData = document.getElementById("iframeId");
    const lat = 6.920848164071123;
    const lon = 79.86582290536944;
    ifameData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`;
  });

  return (
    <>
      <SideBar />
      <TopBar />
      <div className="layout-body">
        <div className="layout-container">
          <div className="shadow-sm p-3 mb-5 bg-white rounded filter-page">
            <h1 className="title">Locations</h1>
            <DataTable className="mt-4" columns={columns} data={data} />
            <iframe
              title="locations"
              className="mt-3"
              id="iframeId"
              height="500px"
              width="100%"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Locations;
