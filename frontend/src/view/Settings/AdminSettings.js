import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import ProfilePic from "../../assets/img/pro.png";

function AdminSettings() {
  return (
    <>
      <SideBar />
      <TopBar />
      <div className="layout-body">
        <div className="layout-container">
          <div className="shadow-sm p-3 mb-3 bg-white rounded filter-page">
            <h1 className="title">Settings</h1>
            <div className="mt-4 row">
              <div className="col-2">
                <img className="img-auto" src={ProfilePic} alt="pro" />
              </div>
              <div className="col-10">
                <ul className="mt-5 mb-5 row">
                  <li className="mb-3 col-12">
                    Full Name :
                    <span className="title-color ms-4">
                      Rathnayaka Mudiyanselage Supun Sathrasinha
                    </span>
                  </li>
                  <li className="mb-3 mt-3 col-6">
                    Date of Birth :
                    <span className="title-color ms-4">2000/05/30</span>
                  </li>
                  <li className="mb-3 mt-3 col-6">
                    NIC:
                    <span className="title-color ms-4">200064746363727</span>
                  </li>
                  <li className="mb-3 mt-3 col-6">
                    Gender:
                    <span className="title-color ms-4">Male</span>
                  </li>
                  <li className="mb-3 mt-3 col-6">
                    Blood Group:
                    <span className="title-color ms-4">O+</span>
                  </li>
                  <hr className="line mt-3 mb-3"></hr>
                  <li className="mb-3 mt-3 col-6">
                    Address Line 01:
                    <span className="title-color ms-4">25 B</span>
                  </li>
                  <li className="mb-3 mt-3 col-6">
                    Address Line 02:
                    <span className="title-color ms-4">Galhena Road</span>
                  </li>
                  <li className="mb-3 mt-3 col-6">
                    District :<span className="title-color ms-4">Colombo</span>
                  </li>
                  <li className="mb-3 mt-3 col-6">
                    City :<span className="title-color ms-4">Nugegoda</span>
                  </li>
                  <li className="mb-3 mt-3 col-6">
                    Province :
                    <span className="title-color ms-4">Western province</span>
                  </li>
                  <hr className="line mt-3 mb-3"></hr>
                  <li className="mb-3 mt-3 col-12">
                    Home Phone :
                    <span className="title-color ms-4">0112-345678</span>
                  </li>
                  <li className="mb-3 mt-3 col-12">
                    Mobile Phone :
                    <span className="title-color ms-4">071-3456789</span>
                  </li>
                  <li className="mb-3 mt-3 col-12">
                    Email Address :
                    <span className="title-color ms-4">
                      supunsatharasinha@gmail.com
                    </span>
                  </li>
                </ul>
                <div className="row">
                  <div className="col-12 d-flex justify-content-end">
                    <button type="button" className="btn btn-primary w-25">
                      Update Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminSettings;
