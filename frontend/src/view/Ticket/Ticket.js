import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import { getSupports } from "../../context/apiCalls";
import { MainContext } from "../../context/MainContext";

function Ticket() {
  const { dispatch } = useContext(MainContext);
  const [ticket, setTicketList] = useState({});

  useEffect(() => {
    getSupports(dispatch).then((response) => {
      setTicketList(response.data);
    });
  }, [dispatch]);

  console.log(ticket);

  const columns = [
    {
      name: "Patient name",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
  ];

  return (
    <>
      <SideBar />
      <TopBar />
      <div className="layout-body">
        <div className="layout-container">
          <div className="shadow-sm p-3 mb-5 bg-white rounded filter-page">
            <h1 className="title">Ticket</h1>
            <DataTable className="mt-4" columns={columns} data={ticket} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Ticket;
