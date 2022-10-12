import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faHome,
  faDatabase,
  faTicket,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className="side-bar">
      <h1 className="title">Covid App</h1>
      <ul className="nav">
        <li className="item">
          <NavLink
            className="nav-item d-flex align-items-center"
            to="/dashboard"
          >
            <FontAwesomeIcon icon={faHome} width="30" />
            <span className="link-text">Dashboard</span>
          </NavLink>
        </li>
        <li className="item">
          <NavLink className="nav-item" to="/data">
            <FontAwesomeIcon icon={faDatabase} width="30" />
            <span className="link-text">Data</span>
          </NavLink>
        </li>
        <li className="item">
          <NavLink className="nav-item" to="/ticket">
            <FontAwesomeIcon icon={faTicket} width="30" />
            <span className="link-text">Ticket</span>
          </NavLink>
        </li>
        <li className="item">
          <NavLink className="nav-item" to="/settings">
            <FontAwesomeIcon icon={faCog} width="30" />
            <span className="link-text">Settings</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
