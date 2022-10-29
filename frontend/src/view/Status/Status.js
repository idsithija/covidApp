import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import { MainContext } from "../../context/MainContext";

function Status() {
  const { user } = useContext(MainContext);
  const columns = [
    {
      name: "Vaccine Name",
      selector: (row) => row.title,
    },
    {
      name: "Vaccinated Date",
      selector: (row) => row.year,
    },
    {
      name: "Expire Date",
      selector: (row) => row.id,
    },
  ];

  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
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
              You need to vaccinete 3rd dose at 2023/05/26.
            </div>
            <DataTable className="mt-4" columns={columns} data={data} />
          </div>
          <div className="shadow-sm p-3 mb-5 bg-white rounded">
            <ul className="mt-5 mb-5 row">
              <li className="mb-3 col-6">
                Full Name :
                <span className="title-color ms-4">
                  Rathnayaka Mudiyanselage Supun Sathrasinha
                </span>
              </li>
              <li className="mb-3 col-6">
                Date of Birth :
                <span className="title-color ms-4">2000/05/30</span>
              </li>
              <li className="mb-3 col-6">
                NIC :<span className="title-color ms-4">200064746363727</span>
              </li>
              <li className="mb-3 col-6">
                Gender :<span className="title-color ms-4">Male</span>
              </li>
              <li className="col-6">
                Blood Group : :<span className="title-color ms-4">O+</span>
              </li>
              <li className="col-6">
                Phone Number : :
                <span className="title-color ms-4">0112-345678</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Status;
