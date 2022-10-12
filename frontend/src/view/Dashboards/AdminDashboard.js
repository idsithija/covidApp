import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";

function AdminDashboard() {
  return (
    <>
      <SideBar />
      <TopBar />
      <div className="layout-body">
        <div className="layout-container">
          <div className="shadow-sm p-3 mb-5 bg-white rounded">
            <div className="welcome-title">Welcome to Dashboard...!</div>
          </div>
          <div className="d-flex justify-content-end">
            <button type="button" className="btn btn-primary">
              Admin Account Settings
            </button>
          </div>
          <div className="row flex-wrap gx-5 mt-5 gy-5">
            <div className="col-6">
              <div className="shadow-sm bg-white rounded text-center count-box">
                <h3 className="fw-semibold">Total vaccine</h3>
                <span className="count">300,000</span>
              </div>
            </div>
            <div className="col-6">
              <div className="shadow-sm bg-white rounded text-center count-box">
                <h3 className="fw-semibold">Available vaccine</h3>
                <span className="count">100,000</span>
              </div>
            </div>
            <div className="col-6">
              <div className="shadow-sm bg-white rounded text-center count-box">
                <h3 className="fw-semibold">Used Vaccine</h3>
                <span className="count">150,000</span>
              </div>
            </div>
            <div className="col-6">
              <div className="shadow-sm bg-white rounded text-center count-box">
                <h3 className="fw-semibold">Sri Lanka Infections</h3>
                <span className="count">90,000</span>
              </div>
            </div>
            <div className="col-6">
              <div className="shadow-sm bg-white rounded text-center count-box">
                <h3 className="fw-semibold">Daily Infections</h3>
                <span className="count">300</span>
              </div>
            </div>
            <div className="col-6">
              <div className="shadow-sm bg-white rounded text-center count-box">
                <h3 className="fw-semibold">Sri Lanka Deaths</h3>
                <span className="count">2000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
