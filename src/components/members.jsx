"use client";
import { useEffect, useRef, useState } from "react";
import Member from "./member";

export default function Members() {
  const [size, setSize] = useState(1);
  const [position, setPosition] = useState(0);
  const [maxPosition, setMaxPosition] = useState(0);
  let slidersSize = 4;
  const sliders = useRef();
  const handleNext = () => {
    if (maxPosition == position) return;
    moveTo(position + 1);
  };
  const handleBack = () => {
    if (position == 0) return;
    moveTo(position - 1);
  };
  const moveTo = (newPosition) => {
    let el = sliders.current;
    if (!el) return;
    el.scrollLeft = el.offsetWidth * newPosition;
    setPosition(newPosition);
  };
  const isMobile = () => {
    let userAgent = navigator.userAgent;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    );
  };
  const initialSetup = () => {
    let browserZoom = isMobile() ? 1 : window.devicePixelRatio;
    let screenWidth = window.innerWidth;
    let breakSize = 640 * browserZoom;

    let newSize = screenWidth >= breakSize ? 2 : 1;

    setSize(newSize);

    let newMaxPosition = Math.round(slidersSize / newSize) - 1;
    setMaxPosition(newMaxPosition);

    setPosition(0);
    moveTo(0);
  };
  useEffect(() => {
    initialSetup();
    window.addEventListener("resize", initialSetup);
    () => window.removeEventListener("resize", initialSetup);
  }, []);
  return (
    <section className="members section" id="members">
      <h2 className="section__title">Miembros</h2>
      <span className="section__subtitle">Conoce a nuestro equipo</span>

      <div className="members__container container">
        <button className="members__control" onClick={handleBack}>
          <i className="uil uil-angle-left-b"></i>
        </button>
        <div className="members__sliders" ref={sliders}>
          <Member
            name="Alexis González"
            avatar="gnzcode"
            job="Desarrollador web"
            github="https://github.com/gnzcode"
            size={size}
            instagram="https://www.instagram.com/gnzcode/"
          />
          <Member
            name="Josseline Jiménez"
            // avatar="josseline"
            job="Trabajo/puesto"
            instagram="https://www.instagram.com/josseline_jimenez_/"
            size={size}
          />
          <Member
            name="Therion Dávila"
            // avatar="therion"
            job="Trabajo/puesto"
            instagram="https://www.instagram.com/__.thxrion_hill.__/"
            size={size}
          />
          <Member
            name="Alin Guerrero"
            // avatar="paty"
            job="Trabajo/puesto"
            instagram="https://www.instagram.com/paty_ggh/"
            size={size}
          />
        </div>
        <button className="members__control" onClick={handleNext}>
          <i className="uil uil-angle-right-b"></i>
        </button>
      </div>
    </section>
  );
}
