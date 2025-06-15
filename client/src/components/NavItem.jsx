import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const NavItem = ({ label, route, scrollTo, className = "", onClick }) => {
  // const isLoggedIn = !!localStorage.getItem("authToken");
const isLoggedIn = false;
  return isLoggedIn ? (
    <NavLink
      to={route}
      onClick={onClick}
      className={({ isActive }) =>
        isActive
          ? `text-blue-400 border-b-2 border-blue-400 pb-1 ${className}`
          : `text-white hover:text-blue-400 transition-all duration-200 ${className}`
      }
    >
      {label}
    </NavLink>
  ) : (
    <ScrollLink
      to={scrollTo}
      smooth={true}
      duration={600}
      offset={-60}
      onClick={onClick}
      className={`text-white hover:text-blue-400 text-xl cursor-pointer ${className}`}
    >
      {label}
    </ScrollLink>
  );
};

export default NavItem;
