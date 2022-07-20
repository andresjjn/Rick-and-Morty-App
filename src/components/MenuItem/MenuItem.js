import { Link } from "react-router-dom";

const MenuItem = ({ title, to }) => {
  return (
    <li>
      <Link className="menu__item" to={to}>
        {title}
      </Link>
    </li>
  );
};

export default MenuItem;
