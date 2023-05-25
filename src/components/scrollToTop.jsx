"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);
  const handleToTop = () => {
    window.scrollTo(0, 0);
  };
  const onScroll = () => {
    let scroll = window.scrollY;
    setShow(scroll > 360);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      className={`scroll-to-top ${show ? "show" : ""}`}
      onClick={handleToTop}
    >
      <i className="uil uil-arrow-up"></i>
    </button>
  );
}
