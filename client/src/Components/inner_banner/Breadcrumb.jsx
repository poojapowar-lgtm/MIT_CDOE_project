import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();

  // split path into parts
  const pathnames = location.pathname.split("/").filter(x => x);

  return (
    <div className="breadcrumb">
      <Link to="/">Home</Link>

      {pathnames.map((value, index) => {
        const to = "/" + pathnames.slice(0, index + 1).join("/");
        const isLast = index === pathnames.length - 1;

        return (
          <span key={to}>
            {" / "}
            {isLast ? (
              <span className="active">{value}</span>
            ) : (
              <Link to={to}>{value}</Link>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;