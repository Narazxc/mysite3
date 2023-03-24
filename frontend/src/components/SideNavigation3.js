import { Link } from "react-router-dom";

export default function SideNavigation3() {
  return (
    <nav className="flex-shrink-0 p-3 bg-white" style={{ width: "280px" }}>
      <Link
        to="/"
        className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom"
      >
        <svg className="bi me-2" width="30" height="24">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-5 fw-semibold">Collapsible</span>
      </Link>
      <ul className="list-unstyled ps-0">
        <li className="mb-1">
          <button
            className="btn btn-toggle align-items-center rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#home-collapse"
            aria-expanded="false"
          >
            Home
          </button>
          <div className="collapse" id="home-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link to="#" className="link-dark rounded">
                  Overview
                </Link>
              </li>
              <li>
                <Link to="#" className="link-dark rounded">
                  Updates
                </Link>
              </li>
              <li>
                <Link to="#" className="link-dark rounded">
                  Reports
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-1">
          <button
            className="btn btn-toggle align-items-center rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#dashboard-collapse"
            aria-expanded="false"
          >
            Dashboard
          </button>
          <div className="collapse" id="dashboard-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link to="#" className="link-dark rounded">
                  Overview
                </Link>
              </li>
              <li>
                <Link to="#" className="link-dark rounded">
                  Weekly
                </Link>
              </li>
              <li>
                <Link to="#" className="link-dark rounded">
                  Monthly
                </Link>
              </li>
              <li>
                <Link to="#" className="link-dark rounded">
                  Annually
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-1">
          <button
            className="btn btn-toggle align-items-center rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#orders-collapse"
            aria-expanded="false"
          >
            Orders
          </button>
          <div className="collapse" id="orders-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link to="#" className="link-dark rounded">
                  New
                </Link>
              </li>
              <li>
                <Link to="#" className="link-dark rounded">
                  Processed
                </Link>
              </li>
              <li>
                <Link to="#" className="link-dark rounded">
                  Shipped
                </Link>
              </li>
              <li>
                <Link to="#" className="link-dark rounded">
                  Returned
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="border-top my-3"></li>
        <li className="mb-1">
          <button
            className="btn btn-toggle align-items-center rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#account-collapse"
            aria-expanded="false"
          >
            Account
          </button>
          <div className="collapse" id="account-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link to="#" className="link-dark rounded">
                  New...
                </Link>
              </li>
              <li>
                <Link to="#" className="link-dark rounded">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="#" className="link-dark rounded">
                  Settings
                </Link>
              </li>
              <li>
                <Link to="#" className="link-dark rounded">
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}
