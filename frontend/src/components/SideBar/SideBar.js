import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faHome,
  faDatabase,
  faTicket,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

function SideBar() {
  return (
    <div className="side-bar">
      <h1 className="title">Covid App</h1>
      <ul className="nav">
        <li className="item">
          <a className="nav-item active d-flex align-items-center">
            <FontAwesomeIcon icon={faHome} width="30" />
            <span className="link-text">Dashboard</span>
          </a>
        </li>
        <li className="item">
          <a className="nav-item">
            <FontAwesomeIcon icon={faDatabase} width="30" />
            <span className="link-text">Data</span>
          </a>
        </li>
        <li className="item">
          <a className="nav-item">
            <FontAwesomeIcon icon={faTicket} width="30" />
            <span className="link-text">Ticket</span>
          </a>
        </li>
        <li className="item">
          <a className="nav-item">
            <FontAwesomeIcon icon={faCog} width="30" />
            <span className="link-text">Settings</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
