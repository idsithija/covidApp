import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faHome,
  faDatabase,
  faTicket,
  faCog,
  faArchive,
  faLocationArrow,
  faQuestionCircle,
  faListAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className="side-bar">
      <h1 className="title">
        <Link className="nav-item d-flex align-items-center" to="/dashboard">
          Covid App
        </Link>
      </h1>
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
          <NavLink
            className="nav-item d-flex align-items-center"
            to="/dashboard1"
          >
            <FontAwesomeIcon icon={faHome} width="30" />
            <span className="link-text">Dashboard 1</span>
          </NavLink>
        </li>
        <li className="item">
          <NavLink className="nav-item" to="/status">
            <FontAwesomeIcon icon={faArchive} width="30" />
            <span className="link-text">Status</span>
          </NavLink>
        </li>
        <li className="item">
          <NavLink className="nav-item" to="/data">
            <FontAwesomeIcon icon={faDatabase} width="30" />
            <span className="link-text">Data</span>
          </NavLink>
        </li>
        <li className="item">
          <NavLink className="nav-item" to="/locations">
            <FontAwesomeIcon icon={faLocationArrow} width="30" />
            <span className="link-text">Locations</span>
          </NavLink>
        </li>
        <li className="item">
          <NavLink className="nav-item" to="/Disease">
            <FontAwesomeIcon icon={faListAlt} width="30" />
            <span className="link-text">Disease</span>
          </NavLink>
        </li>
        <li className="item">
          <NavLink className="nav-item" to="/ticket">
            <FontAwesomeIcon icon={faTicket} width="30" />
            <span className="link-text">Ticket</span>
          </NavLink>
        </li>
        <li className="item">
          <NavLink className="nav-item" to="/support">
            <FontAwesomeIcon icon={faQuestionCircle} width="30" />
            <span className="link-text">Support</span>
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
