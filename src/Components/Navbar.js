import React from "react";
import PropTypes from "prop-types";

import {
  Link
} from "react-router-dom";
export default function Navbar(props) {
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/Action">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Another action">
                    Another action
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/Something else here">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className="form-check form-switch mx-3" onClick={props.toggleMode} >
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
              style={{color:props.mode==="light"?"black":"white"}}
            >
              Switch to {props.mode==="light"?"dark":"light"} mode
            </label>
          </div>
          <form className="d-flex">
            <input id="search"
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{color:props.mode==="light"?"black":"white",backgroundColor:props.mode==="dark"?"#000b17":"white"}}
            />
            <button  className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};
Navbar.defaultProps = {
  title: "Set Title Here",
  aboutText: "about Text",
};
