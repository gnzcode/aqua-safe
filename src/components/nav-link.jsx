"use client";
export default function NavLink({ label, section, children, onHide }) {
  return (
    <li onClick={onHide} className="nav__item">
      <a href={`#${section}`} className="nav__link">
        <span className="nav__icon">{children}</span>
        {label}
      </a>
    </li>
  );
}
