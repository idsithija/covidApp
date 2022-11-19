import { faCircleInfo, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import { deleteTicket, getSupports } from "../../context/apiCalls";
import { MainContext } from "../../context/MainContext";

function Ticket() {
  const { dispatch } = useContext(MainContext);
  const [ticket, setTicketList] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    getSupports(dispatch).then((response) => {
      setTicketList(response.data);
    });
  }, [dispatch]);

  const columns = [
    {
      name: "Patient name",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Action",
      width: "150px",
      selector: (row) => (
        <div className="d-flex">
          <FontAwesomeIcon
            onClick={() => goDetailsPage(row)}
            className="cp tabel-icon me-3"
            icon={faCircleInfo}
          />
          <FontAwesomeIcon
            onClick={() => deleteTicketFun(row)}
            className="cp tabel-icon"
            icon={faTrash}
          />
        </div>
      ),
    },
  ];

  const goDetailsPage = (data) => {
    setMessage(data.details);
  };

  const deleteTicketFun = (data) => {
    deleteTicket(data.id, dispatch).then(() => {
      window.location.reload();
    });
  };

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
          {message ? (
            <div className="shadow-sm p-3 mb-5 bg-white rounded filter-page">
              <h1 className="title">Mesage</h1>
              <p className="mt-4">{message}</p>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Ticket;
