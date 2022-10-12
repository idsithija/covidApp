import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";

function UserDashboard() {
  return (
    <>
      <SideBar />
      <TopBar />
      <div className="layout-body">
        <div className="layout-container">
          <div className="shadow-sm p-3 mb-5 bg-white rounded">
            <div className="welcome-title">
              Welcome to Supun...! See the latest updates.
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="shadow-sm p-3 bg-white rounded col-9">
              <div className="account-warning">
                Please add the Account settings.
              </div>
            </div>
            <div className="col-3">
              <button type="button" className="btn btn-primary float-end">
                User Account Settings
              </button>
            </div>
          </div>
          <div className="row flex-wrap gx-5 mt-5 gy-5">
            <div className="col-6">
              <div className="shadow-sm bg-white rounded text-center count-box">
                <h3 className="fw-semibold">Global Infection</h3>
                <span className="count">650,000</span>
              </div>
            </div>
            <div className="col-6">
              <div className="shadow-sm bg-white rounded text-center count-box">
                <h3 className="fw-semibold">Global deaths</h3>
                <span className="count">75,000</span>
              </div>
            </div>
            <div className="col-6">
              <div className="shadow-sm bg-white rounded text-center count-box">
                <h3 className="fw-semibold">Sri Lanka Infection</h3>
                <span className="count">20,000</span>
              </div>
            </div>
            <div className="col-6">
              <div className="shadow-sm bg-white rounded text-center count-box">
                <h3 className="fw-semibold">Sri Lanka Vaccinated count</h3>
                <span className="count">100,000</span>
              </div>
            </div>
            <div className="col-6">
              <div className="shadow-sm bg-white rounded text-center count-box">
                <h3 className="fw-semibold">Sri Lanka Survived count</h3>
                <span className="count">50,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDashboard;
