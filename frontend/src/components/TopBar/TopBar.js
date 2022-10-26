import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useRef, useState } from "react";
import ProfilePic from "../../assets/img/pro.png";
import { MainContext } from "../../context/MainContext";
import { logout } from "../../context/MainAction";

function TopBar() {
  const { user, dispatch } = useContext(MainContext);
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
          <span className="">{user.username}</span>
          <span className="gray-color">ID:{user.id}</span>
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
              <span className="cp" onClick={() => dispatch(logout())}>
                <FontAwesomeIcon icon={faSignOut} />
                <span className="link-text ms-2">Logout</span>
              </span>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default TopBar;
