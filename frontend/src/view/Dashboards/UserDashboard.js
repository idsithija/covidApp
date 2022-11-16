import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import { settings } from "../../context/apiCalls";
import { MainContext } from "../../context/MainContext";
import { getUser, getVaccines } from "../../context/apiCalls";
import DataTable from "react-data-table-component";

function UserDashboard() {
  const Navigate = useNavigate();
  const { user, dispatch } = useContext(MainContext);
  const [errorMsg, setErrorMsg] = useState("");
  const [vaccineList, setVaccineList] = useState([]);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    settings({ userid: user.id }, dispatch).catch((error) => {
      setErrorMsg(error.response.data);
    });
  }, [dispatch, user.id]);

  const clickSetting = () => {
    Navigate("/details");
  };

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
          <div className="shadow-sm p-3 mb-5 bg-white rounded">
            <div className="welcome-title">
              Welcome to {user.username}...! See the latest updates.
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="col-9">
              {errorMsg !== "" ? (
                <div className="shadow-sm p-3 bg-white rounded">
                  <div className="account-warning">{errorMsg}.</div>
                </div>
              ) : null}
            </div>
            <div className="col-3">
              <button
                type="button"
                className="btn btn-primary float-end"
                onClick={() => clickSetting()}
              >
                User Account Settings
              </button>
            </div>
          </div>
          <div className="shadow-sm p-3 mb-5 mt-3 bg-white rounded filter-page">
            <h1 className="title">Status</h1>
            <div className="welcome-title title-color mt-4">
              Current Status of {user.username}...
            </div>
            <div className="mt-3">
              {vaccineList.length === 0
                ? "You need to vaccinate 1 dose."
                : "You need to vaccinate" +
                    vaccineList.length +
                    1 +
                    "dose at" +
                    vaccineList[vaccineList.length - 1] !==
                  undefined
                ? "You need to vaccinate " +
                  (vaccineList.length + 1) +
                  " dose at" +
                  vaccineList[vaccineList.length - 1].expireDate
                : null}
            </div>
            <DataTable className="mt-4" columns={columns} data={vaccineList} />
          </div>

          <div className="shadow-sm p-3 mb-5 bg-white rounded">
            <ul className="mt-5 mb-5 row">
              <li className="mb-3 col-6">
                Full Name :
                {userData !== null ? (
                  <span className="title-color ms-4">{userData.fullname}</span>
                ) : null}
              </li>
              <li className="mb-3 col-6">
                Date of Birth :
                {userData !== null ? (
                  <span className="title-color ms-4">{userData.dob}</span>
                ) : null}
              </li>
              <li className="mb-3 col-6">
                NIC :
                {userData !== null ? (
                  <span className="title-color ms-4">{userData.nic}</span>
                ) : null}
              </li>
              <li className="mb-3 col-6">
                Gender :
                {userData !== null ? (
                  <span className="title-color ms-4">{userData.gender}</span>
                ) : null}
              </li>
              <li className="col-6">
                Blood Group :
                {userData !== null ? (
                  <span className="title-color ms-4">
                    {userData.bloodgroup}
                  </span>
                ) : null}
              </li>
              <li className="col-6">
                Phone Number :
                {userData !== null ? (
                  <span className="title-color ms-4">
                    {userData.mobilephone}
                  </span>
                ) : null}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDashboard;
