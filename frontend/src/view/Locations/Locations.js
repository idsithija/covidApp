import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { MainContext } from "../../context/MainContext";
import { getLocations } from "../../context/apiCalls";

function Locations() {
  const { dispatch } = useContext(MainContext);
  const [location, setLocation] = useState({
    lat: 6.920848164071123,
    lon: 79.86582290536944,
  });

  const [locationsList, setLocationsList] = useState([]);

  useEffect(() => {
    getLocations(dispatch).then((response) => {
      setLocationsList(response.data);
    });
  }, [dispatch]);

  const columns = [
    {
      name: "Location",
      selector: (row) => row.location,
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
      lat: Number(e.latitude),
      lon: Number(e.longitude),
    });
  };

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
            <DataTable
              className="mt-4"
              columns={columns}
              data={locationsList}
            />
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
