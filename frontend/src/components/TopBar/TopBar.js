import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import ProfilePic from "../../assets/img/pro.png";

function TopBar() {
  const [openMenu, setOpenMenu] = useState(false);
  const wrapperRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target) &&
        !imgRef.current.contains(event.target)
      ) {
        setOpenMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const clickMenu = () => {
    setOpenMenu((current) => !current);
  };
  return (
    <div className="top-bar d-flex justify-content-end">
      <div className="d-flex align-items-center">
        <div className="d-flex flex-column align-items-end me-4">
          <span className="">supunsatharasinha@gmail.com</span>
          <span className="gray-color">ID:1234567</span>
        </div>
        <img
          ref={imgRef}
          className="top-pro cp"
          src={ProfilePic}
          alt="pro"
          onClick={() => clickMenu()}
        />
      </div>
      {openMenu ? (
        <div ref={wrapperRef} className="menu shadow-sm rounded bg-white p-3">
          <ul>
            <li className="d-flex align-items-center">
              <NavLink to="/">
                <FontAwesomeIcon icon={faSignOut} />
                <span className="link-text ms-2">Logout</span>
              </NavLink>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default TopBar;
