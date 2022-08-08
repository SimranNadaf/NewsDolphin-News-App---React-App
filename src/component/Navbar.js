import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              NewsDolfin
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categories
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/general">
                        general
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/entertainment">
                        entertainment
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/business">
                        business
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/health">
                        health
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/science">
                        science
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/sports">
                        sports
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/technology">
                        technology
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
