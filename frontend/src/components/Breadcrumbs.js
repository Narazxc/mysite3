import { Link, useLocation } from "react-router-dom";

// styles
import "./Breadcrumbs.css";
export default function Breadcrumbs() {
  const location = useLocation();

  // /help/contact --> help page/ contact page

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

  // console.log(location);

  return <div className="breadcrumbs">{crumbs}</div>;
}
