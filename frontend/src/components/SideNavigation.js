import { NavLink, Link } from "react-router-dom";

// style & images
import "./SideNavigation.css";
import DashboardIcon from "../assets/dashboard_icon_white.svg";

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
        {/* <svg className="bi me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg> */}
        <span className="fs-4">Sidebar</span>
      </NavLink>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink to="/" className="nav-link text-white" aria-current="page">
            {/* <svg className="bi me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg> */}

            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard"
            className="nav-link text-white d-flex justify-content-start align-items-center"
          >
            {/* <svg className="bi me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg> */}
            <img
              src={DashboardIcon}
              style={{
                width: "24px",
                height: "24px",
                marginRight: "12px",
              }}
              alt="dashboard icon"
            />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/orders"
            className="nav-link text-white d-flex justify-content-start align-items-center"
          >
            <svg className="bi me-2" width="16" height="16">
              <use xlinkHref="#table"></use>
            </svg>
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink to="/favoritecharacters" className="nav-link text-white">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 21 19"
              style={{ width: "20px", height: "20px", marginRight: "16px" }}
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"
              />
            </svg>
            Favorite Characters
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/animesites"
            className="nav-link text-white d-flex justify-content-start align-items-center"
          >
            {/* <svg className="bi me-2" width="16" height="16">
              <use xlinkHref="#people-circle"></use>
            </svg> */}
            {/* <svg
              className="text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 10"
              style={{ width: "20px", height: "20px", marginRight: "16px" }}
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M6 1h10M6 5h10M6 9h10M1.49 1h.01m-.01 4h.01m-.01 4h.01"
              />
            </svg> */}
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
              style={{ width: "20px", height: "20px", marginRight: "16px" }}
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5h6M9 8h6m-6 3h6M4.996 5h.01m-.01 3h.01m-.01 3h.01M2 1h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"
              />
            </svg>
            <span>Anime Sites</span>
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
