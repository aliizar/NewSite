import React  from "react";
import { Link } from "react-router-dom";
const Navbar =()=> {
    return (
      <div>
        <nav className="navbar  navbar-expand-lg text-white bg-dark ">
          <div className="container-fluid text-white">
            <Link className="navbar-brand text-white" to="/NewsMonkey">
              NewsMonkey
            </Link>
            <button
              className="navbar-toggler text-white"
              type="button text-white"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navi gation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                
                <li className="nav-item">
                  <Link className="nav-link Colors" to="/Business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link Colors" to="/Entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link Colors" to="/Health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link Colors" to="/Science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link Colors" to="/Sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link Colors" to="/Technology">
                    Technology
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  id="Svg"
                  className="form-control me-2 bg-dark text-white "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-primary" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  
}
export default Navbar;