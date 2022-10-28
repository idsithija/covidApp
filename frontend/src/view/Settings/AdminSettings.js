import React, { useContext, useEffect, useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import ProfilePic from "../../assets/img/pro.png";
import { MainContext } from "../../context/MainContext";
import { getSettings } from "../../context/apiCalls";

function AdminSettings() {
  const { user, dispatch } = useContext(MainContext);
  const [data, setData] = useState({});

  useEffect(() => {
    getSettings({ userid: user.id }, dispatch).then((response) => {
      setData({ ...response.data });
    });
  }, [user.id, dispatch]);

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
                    <span className="title-color ms-4">{data.fullname}</span>
                  </li>
                  <li className="mb-3 mt-3 col-6">
                    Date of Birth :
                    <span className="title-color ms-4">{data.dob}</span>
                  </li>
                  <li className="mb-3 mt-3 col-6">
                    NIC :<span className="title-color ms-4">{data.nic}</span>
                  </li>
                  <li className="mb-3 mt-3 col-6">
                    Gender :
                    <span className="title-color ms-4">{data.gender}</span>
                  </li>
                  <li className="mb-3 mt-3 col-6">
                    Blood Group :
                    <span className="title-color ms-4">{data.bloodgroup}</span>
                  </li>
                  <hr className="line mt-3 mb-3"></hr>
                  <li className="mb-3 mt-3 col-6">
                    Address Line 01 :
                    <span className="title-color ms-4">
                      {data.addressline1}
                    </span>
                  </li>
                  <li className="mb-3 mt-3 col-6">
                    Address Line 02 :
                    <span className="title-color ms-4">
                      {data.addressline2}
                    </span>
                  </li>
                  <li className="mb-3 mt-3 col-6">
                    District :
                    <span className="title-color ms-4">{data.district}</span>
                  </li>
                  <li className="mb-3 mt-3 col-6">
                    City :<span className="title-color ms-4">{data.city}</span>
                  </li>
                  <li className="mb-3 mt-3 col-6">
                    Province :
                    <span className="title-color ms-4">{data.province}</span>
                  </li>
                  <hr className="line mt-3 mb-3"></hr>
                  <li className="mb-3 mt-3 col-12">
                    Home Phone :
                    <span className="title-color ms-4">{data.homephone}</span>
                  </li>
                  <li className="mb-3 mt-3 col-12">
                    Mobile Phone :
                    <span className="title-color ms-4">{data.mobilephone}</span>
                  </li>
                  <li className="mb-3 mt-3 col-12">
                    Email Address :
                    <span className="title-color ms-4">{data.email}</span>
                  </li>
                </ul>
                {/* <div className="row">
                  <div className="col-12 d-flex justify-content-end">
                    <button type="button" className="btn btn-primary w-25">
                      Update Profile
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminSettings;
