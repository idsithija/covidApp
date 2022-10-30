import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import { getUser, getVaccines } from "../../context/apiCalls";
import { MainContext } from "../../context/MainContext";

function Status() {
  const { user, dispatch } = useContext(MainContext);
  const [vaccineList, setVaccineList] = useState([]);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getVaccines(user.id, dispatch).then((response) => {
      setVaccineList(response.data);
    });
    getUser(user.id, dispatch).then((response) => {
      setUserData(response.data);
    });
  }, [dispatch, user.id]);

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

  return (
    <>
      <SideBar />
      <TopBar />
      <div className="layout-body">
        <div className="layout-container">
          <div className="shadow-sm p-3 mb-5 bg-white rounded filter-page">
            <h1 className="title">Locations</h1>
            <div className="welcome-title title-color mt-4">
              Current Status of {user.username}...
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
            <ul className="mt-5 mb-5 row">
              <li className="mb-3 col-6">
                Full Name :
                <span className="title-color ms-4">{userData.fullname}</span>
              </li>
              <li className="mb-3 col-6">
                Date of Birth :
                <span className="title-color ms-4">{userData.dob}</span>
              </li>
              <li className="mb-3 col-6">
                NIC :<span className="title-color ms-4">{userData.nic}</span>
              </li>
              <li className="mb-3 col-6">
                Gender :
                <span className="title-color ms-4">{userData.gender}</span>
              </li>
              <li className="col-6">
                Blood Group :
                <span className="title-color ms-4">{userData.bloodgroup}</span>
              </li>
              <li className="col-6">
                Phone Number :
                <span className="title-color ms-4">{userData.mobilephone}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Status;
