import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import {
  faHome,
  faDatabase,
  faTicket,
  faCog,
  faLocationArrow,
  faQuestionCircle,
  faListAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { MainContext } from "../../context/MainContext";
import Logo1 from "../../assets/img/Logo1.png";

function SideBar() {
  const { user } = useContext(MainContext);
  return (
    <div className="side-bar">
      <h1 className="title">
        <Link className="nav-item d-flex align-items-center" to="/dashboard">
          <img className="logo1" src={Logo1} alt="logo" />
        </Link>
      </h1>
      <ul className="nav">
        {user.usertype !== "USER" ? (
          <li className="item">
            <NavLink
              className="nav-item d-flex align-items-center"
              to="/dashboard"
            >
              <FontAwesomeIcon icon={faHome} width="30" />
              <span className="link-text">Dashboard</span>
            </NavLink>
          </li>
        ) : null}
        {user.usertype === "USER" ? (
          <li className="item">
            <NavLink
              className="nav-item d-flex align-items-center"
              to="/dashboard-user"
            >
              <FontAwesomeIcon icon={faHome} width="30" />
              <span className="link-text">Dashboard</span>
            </NavLink>
          </li>
        ) : null}
        {user.usertype !== "USER" ? (
          <li className="item">
            <NavLink className="nav-item d-flex align-items-center" to="/data">
              <FontAwesomeIcon icon={faDatabase} width="30" />
              <span className="link-text">Data</span>
            </NavLink>
          </li>
        ) : null}
        {user.usertype === "USER" ? (
          <li className="item">
            <NavLink
              className="nav-item d-flex align-items-center"
              to="/locations"
            >
              <FontAwesomeIcon icon={faLocationArrow} width="30" />
              <span className="link-text">Locations</span>
            </NavLink>
          </li>
        ) : null}
        {user.usertype !== "USER" ? (
          <li className="item">
            <NavLink
              className="nav-item d-flex align-items-center"
              to="/Disease"
            >
              <FontAwesomeIcon icon={faListAlt} width="30" />
              <span className="link-text">Disease</span>
            </NavLink>
          </li>
        ) : null}
        {user.usertype !== "USER" ? (
          <li className="item">
            <NavLink
              className="nav-item d-flex align-items-center"
              to="/addlocations"
            >
              <FontAwesomeIcon icon={faLocationArrow} width="30" />
              <span className="link-text">Locations</span>
            </NavLink>
          </li>
        ) : null}
        {user.usertype !== "USER" ? (
          <li className="item">
            <NavLink
              className="nav-item d-flex align-items-center"
              to="/ticket"
            >
              <FontAwesomeIcon icon={faTicket} width="30" />
              <span className="link-text">Ticket</span>
            </NavLink>
          </li>
        ) : null}
        {user.usertype === "USER" ? (
          <li className="item">
            <NavLink
              className="nav-item d-flex align-items-center"
              to="/support"
            >
              <FontAwesomeIcon icon={faQuestionCircle} width="30" />
              <span className="link-text">Support</span>
            </NavLink>
          </li>
        ) : null}
        <li className="item">
          <NavLink
            className="nav-item d-flex align-items-center"
            to="/settings"
          >
            <FontAwesomeIcon icon={faCog} width="30" />
            <span className="link-text">Settings</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
