import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import { settings } from "../../context/apiCalls";
import { MainContext } from "../../context/MainContext";
import Soap from "../../assets/img/soap.png";
import Patient from "../../assets/img/patient.png";
import Social from "../../assets/img/social.png";
import Man from "../../assets/img/man.png";
import StayHome from "../../assets/img/stay-at-home.png";
import Social1 from "../../assets/img/social1.png";

function UserDashboard() {
  const Navigate = useNavigate();
  const { user, dispatch } = useContext(MainContext);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    settings({ userid: user.id }, dispatch).catch((error) => {
      setErrorMsg(error.response.data);
    });
  }, [dispatch, user.id]);

  const clickSetting = () => {
    Navigate("/details");
  };
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
          <div className="row flex-wrap gx-5 mt-2 gy-4">
            <div className="col-6">
              <div className="shadow-sm bg-white rounded text-center count-box">
                <img
                  className="mb-2"
                  src={Soap}
                  alt="soap"
                  width="60"
                  height="60"
                />
                <h3 className="fw-semibold">Safety and Cleanliness First</h3>
              </div>
            </div>
            <div className="col-6">
              <div className="shadow-sm bg-white rounded text-center count-box">
                <img
                  className="mb-2"
                  src={Man}
                  alt="Man"
                  width="60"
                  height="60"
                />
                <h3 className="fw-semibold">Take Care of You</h3>
              </div>
            </div>
            <div className="col-6">
              <div className="shadow-sm bg-white rounded text-center count-box">
                <img
                  className="mb-2"
                  src={Social}
                  alt="Social"
                  width="60"
                  height="60"
                />
                <h3 className="fw-semibold">Maintain Social Distance</h3>
              </div>
            </div>
            <div className="col-6">
              <div className="shadow-sm bg-white rounded text-center count-box">
                <img
                  className="mb-2"
                  src={Patient}
                  alt="Patient"
                  width="60"
                  height="60"
                />
                <h3 className="fw-semibold">Wear a Mask</h3>
              </div>
            </div>
            <div className="col-6">
              <div className="shadow-sm bg-white rounded text-center count-box">
                <img
                  className="mb-2"
                  src={StayHome}
                  alt="StayHome"
                  width="60"
                  height="60"
                />
                <h3 className="fw-semibold">Stay at Home</h3>
              </div>
            </div>
            <div className="col-6">
              <div className="shadow-sm bg-white rounded text-center count-box">
                <img
                  className="mb-2"
                  src={Social1}
                  alt="Social1"
                  width="60"
                  height="60"
                />
                <h3 className="fw-semibold">Do not Group</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDashboard;
