import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

function Locations() {
  const [location, setLocation] = useState({
    lat: 6.920848164071123,
    lon: 79.86582290536944,
  });
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
      selector: (row) => (
        <FontAwesomeIcon
          className="tabel-icon cp"
          onClick={() => getLocation(row)}
          icon={faLocationArrow}
        />
      ),
    },
  ];

  const getLocation = (e) => {
    setLocation({
      lat: e.lat,
      lon: e.lon,
    });
  };

  const data = [
    {
      id: 1,
      title: "Vaccine 01",
      year: "Colombo",
      lat: 6.920848164071123,
      lon: 79.86582290536944,
    },
    {
      id: 2,
      title: "Vaccine 02",
      year: "Panadura",
      lat: 6.7216,
      lon: 79.9069,
    },
    {
      id: 3,
      title: "Vaccine 03",
      year: "Anuradapura",
      lat: 8.3258,
      lon: 80.4135,
    },
  ];

  useEffect(() => {
    const ifameData = document.getElementById("iframeId");
    ifameData.src = `https://maps.google.com/maps?q=${location.lat},${location.lon}&hl=es;&output=embed`;
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
