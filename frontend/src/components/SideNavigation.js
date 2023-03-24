import { NavLink, Link } from "react-router-dom";

// style
import "./SideNavigation.css";

export default function NameSideNavigation() {
  return (
    <nav
      className="d-flex flex-column flex-shrink-0 p-3 text-white"
      style={{ width: "280px" }}
    >
      <NavLink
        to="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">Sidebar</span>
      </NavLink>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink to="/" className="nav-link text-white" aria-current="page">
            <svg className="bi me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16">
              <use xlinkHref="#table"></use>
            </svg>
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink to="/favoritecharacters" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16">
              <use xlinkHref="#grid"></use>
            </svg>
            Favorite Characters
          </NavLink>
        </li>
        <li>
          <NavLink to="/animesites" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16">
              <use xlinkHref="#people-circle"></use>
            </svg>
            Anime Sites
          </NavLink>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <NavLink
          to="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </NavLink>
        <ul
          className="dropdown-menu dropdown-menu-dark text-small shadow"
          aria-labelledby="dropdownUser1"
        >
          {/* <li>
            <Link className="dropdown-item" to="#">
              New project...
            </Link>
          </li> */}
          <li>
            <Link className="dropdown-item" to="/signup">
              signup
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/login">
              login
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link className="dropdown-item" to="/logout">
              logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
