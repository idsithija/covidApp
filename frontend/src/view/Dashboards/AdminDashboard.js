import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import { getSummary, settings } from "../../context/apiCalls";
import { MainContext } from "../../context/MainContext";

function AdminDashboard() {
  const Navigate = useNavigate();
  const { user, dispatch } = useContext(MainContext);
  const [errorMsg, setErrorMsg] = useState("");
  const [data, setData] = useState({});
  const [sriLanka, setSriLanka] = useState({});

  useEffect(() => {
    settings({ userid: user.id }, dispatch).catch((error) => {
      setErrorMsg(error.response.data);
    });

    getSummary(dispatch).then((response) => {
      setData(response.data);
      setSriLanka(
        response.data.Countries.find((item) => item.CountryCode === "LK")
      );
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
            <div className="welcome-title">Welcome to Dashboard...!</div>
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
          <div className="row flex-wrap gx-5 mt-1 gy-5">
            <div className="col-6">
              <div className="shadow-sm bg-white rounded text-center count-box">
                <h3 className="fw-semibold">Globle New Confirmed</h3>
                {data.Global ? (
                  <span className="count">{data.Global.NewConfirmed}</span>
                ) : null}
              </div>
            </div>
            <div className="col-6">
              <div className="shadow-sm bg-white rounded text-center count-box">
                <h3 className="fw-semibold">Globle New Deaths</h3>
                {data.Global ? (
                  <span className="count">{data.Global.NewDeaths}</span>
                ) : null}
              </div>
            </div>
            <div className="col-6">
              <div className="shadow-sm bg-white rounded text-center count-box">
                <h3 className="fw-semibold">Globle Total Confirmed</h3>
                {data.Global ? (
                  <span className="count">{data.Global.TotalConfirmed}</span>
                ) : null}
              </div>
            </div>
            <div className="col-6">
              <div className="shadow-sm bg-white rounded text-center count-box">
                <h3 className="fw-semibold">Globle Total Deaths</h3>
                {data.Global ? (
                  <span className="count">{data.Global.TotalDeaths}</span>
                ) : null}
              </div>
            </div>
            <div className="col-6">
              <div className="shadow-sm bg-white rounded text-center count-box">
                <h3 className="fw-semibold">Sri Lanka New Confirmed</h3>
                <span className="count">{sriLanka.NewConfirmed}</span>
              </div>
            </div>
            <div className="col-6">
              <div className="shadow-sm bg-white rounded text-center count-box">
                <h3 className="fw-semibold">Sri Lanka New Deaths</h3>
                <span className="count">{sriLanka.NewDeaths}</span>
              </div>
            </div>
            <div className="col-6">
              <div className="shadow-sm bg-white rounded text-center count-box">
                <h3 className="fw-semibold">Sri Lanka Total Confirmed</h3>
                <span className="count">{sriLanka.TotalConfirmed}</span>
              </div>
            </div>
            <div className="col-6">
              <div className="shadow-sm bg-white rounded text-center count-box">
                <h3 className="fw-semibold">Sri Lanka Total Deaths</h3>
                <span className="count">{sriLanka.TotalDeaths}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
