"use client";

import { useEffect, useState } from "react";
import NavLink from "./nav-link";

export default function Navigation() {
  const [showMenu, setShowMenu] = useState();
  const handleShowMenu = () => setShowMenu(!showMenu);
  const disableShowMenu = () => setShowMenu(false);
  const [dark, setDark] = useState(false);
  const switchTheme = (newDark) => {
    if (newDark) {
      document.body.classList.add("dark");
      localStorage.setItem("dark", "true");
      setDark(true);
      return;
    }
    document.body.classList.remove("dark");
    localStorage.removeItem("dark");
    setDark(false);
  };
  useEffect(() => {
    let isDark = localStorage.getItem("dark");
    if (isDark) switchTheme(true);
  }, []);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <span className="nav__logo-icon">
            <i className="uil uil-wind-sun"></i>
          </span>
          AQUA SAFE
        </a>
        <menu className={`nav__menu ${showMenu ? "show" : ""}`}>
          <ul className="nav__links grid">
            <NavLink section="" label="Inicio" onHide={disableShowMenu}>
              <i className="uil uil-estate"></i>
            </NavLink>
            <NavLink section="about" label="Acerca de" onHide={disableShowMenu}>
              <i className="uil uil-info-circle"></i>
            </NavLink>
            <NavLink
              section="activities"
              label="Actividades"
              onHide={disableShowMenu}
            >
              <i className="uil uil-thumbs-up"></i>
            </NavLink>
            <NavLink
              section="location"
              label="Ubicación"
              onHide={disableShowMenu}
            >
              <i className="uil uil-map-marker"></i>
            </NavLink>
            <NavLink
              section="members"
              label="Miembros"
              onHide={disableShowMenu}
            >
              <i className="uil uil-users-alt"></i>
            </NavLink>
            <NavLink
              section="contact"
              label="Contacto"
              onHide={disableShowMenu}
            >
              <i className="uil uil-phone"></i>
            </NavLink>
          </ul>
          <button className="nav__close only-mobile" onClick={disableShowMenu}>
            <i className="uil uil-times"></i>
          </button>
        </menu>
        <div className="nav__btns">
          <button className="nav__toggle" onClick={() => switchTheme(!dark)}>
            {dark ? (
              <i className="uil uil-sun"></i>
            ) : (
              <i className="uil uil-moon"></i>
            )}
          </button>
          <button className="nav__toggle only-mobile" onClick={handleShowMenu}>
            <i className="uil uil-apps"></i>
          </button>
        </div>
      </nav>
    </header>
  );
}
