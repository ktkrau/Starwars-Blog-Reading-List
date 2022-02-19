import propTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import logoImagen from "../../img/startwars.png"
import "../../styles/navbar.css";


export const Navbar = (props) => {
  return (
	  <nav className="navbar navbar-expand-lg navbar-light bg-light Light py-1 px-5">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
		  <img className="img" src={logoImagen} />
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form className="d-flex">
            <div className="btn-group">
              <button
                className="btn btn-primary btn-lg dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Favorites
              </button>
              <div className="dropdown-menu"> ...</div>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};
