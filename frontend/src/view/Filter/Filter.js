import React, { useContext, useEffect, useRef, useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import DataTable from "react-data-table-component";
import { MainContext } from "../../context/MainContext";
import { getUsers } from "../../context/apiCalls";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Filter() {
  const Navigate = useNavigate();
  const { dispatch } = useContext(MainContext);
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const [userId, setUserId] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const nameRef = useRef();
  const ageRef = useRef();
  const userIdRef = useRef();
  const locationRef = useRef();

  useEffect(() => {
    getUsers(dispatch).then((response) => {
      setUser(response.data);
    });
  }, [dispatch]);

  const handleSearch = (event) => {
    setSearch("" + event.target.value + "");
  };

  const handleSearchUserId = (event) => {
    setUserId("" + event.target.value + "");
  };

  const handleSearchAge = (event) => {
    setAge("" + event.target.value + "");
  };

  const handleSearchLocation = (event) => {
    setLocation("" + event.target.value + "");
  };

  const clearFilter = () => {
    nameRef.current.value = "";
    ageRef.current.value = "";
    userIdRef.current.value = "";
    locationRef.current.value = "";
    setSearch("");
    setUserId("");
    setAge("");
    setLocation("");
  };

  const userToShow =
    search || userId || age || location
      ? user.filter(function (employee) {
          return (
            employee.fullname
              .toLowerCase()
              .indexOf("" + search.toLowerCase() + "") > -1 &&
            employee.userid
              .toLowerCase()
              .indexOf("" + userId.toLowerCase() + "") > -1 &&
            employee.age.toLowerCase().indexOf("" + age.toLowerCase() + "") >
              -1 &&
            employee.city
              .toLowerCase()
              .indexOf("" + location.toLowerCase() + "") > -1
          );
        })
      : user;

  const goDetailsPage = (e) => {
    Navigate(`/data/${e.userid}`, { state: e });
  };

  const columns = [
    {
      name: "Patient name",
      selector: (row) => row.fullname,
    },
    {
      name: "Location",
      selector: (row) => row.city,
    },
    {
      name: "District",
      selector: (row) => row.district,
    },
    {
      name: "Action",
      width: "150px",
      selector: (row) => (
        <FontAwesomeIcon
          onClick={() => goDetailsPage(row)}
          className="cp tabel-icon"
          icon={faCircleInfo}
        />
      ),
    },
  ];

  return (
    <>
      <SideBar />
      <TopBar />
      <div className="layout-body">
        <div className="layout-container">
          <div className="shadow-sm p-3 mb-5 bg-white rounded filter-page">
            <h1 className="title">Data</h1>
            <div className="filter-section mt-4">
              <div className="row flex-wrap mt-3 mb-3">
                <div className="col-3">
                  <label className="name">Name</label>
                  <input
                    ref={nameRef}
                    className="form-control mt-1"
                    name="name"
                    placeholder="Name..."
                    onChange={handleSearch}
                  />
                </div>
                <div className="col-3">
                  <label className="age">Age</label>
                  <input
                    ref={ageRef}
                    className="form-control mt-1"
                    name="age"
                    placeholder="Age..."
                    onChange={handleSearchAge}
                  />
                </div>
                <div className="col-3">
                  <label className="id">User Id</label>
                  <input
                    ref={userIdRef}
                    className="form-control mt-1"
                    name="userid"
                    placeholder="User Id..."
                    onChange={handleSearchUserId}
                  />
                </div>
                <div className="col-3">
                  <label className="location">Location</label>
                  <input
                    ref={locationRef}
                    className="form-control mt-1"
                    name="location"
                    placeholder="Location..."
                    onChange={handleSearchLocation}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  className="btn btn-outline-primary ms-3"
                  onClick={clearFilter}
                >
                  Clear
                </button>
              </div>
            </div>
            <DataTable columns={columns} data={userToShow} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
