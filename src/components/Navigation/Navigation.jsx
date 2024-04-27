import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const getNavLinkActive = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/" className={getNavLinkActive}>
        Homepage{" "}
      </NavLink>
      <NavLink to="/movies" className={getNavLinkActive}>
        Movies{" "}
      </NavLink>
    </nav>
  );
}
