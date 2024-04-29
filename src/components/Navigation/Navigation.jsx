import clsx from "clsx";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/filmoteka.svg";
import css from "./Navigation.module.css";

const getNavLinkActive = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <nav>
      <img src={logo} width="48px" />
      <NavLink to="/" className={getNavLinkActive}>
        Homepage{" "}
      </NavLink>
      <NavLink to="/movies" className={getNavLinkActive}>
        Movies{" "}
      </NavLink>
    </nav>
  );
}
