import AboutCard from "./about-card";

export default function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">Acerca de</h2>
      <span className="section__subtitle">¿Quiénes somos?</span>

      <div className="about__container container grid">
        <div className="about__data">
          <img
            loading="lazy"
            src="assets/playa.webp"
            alt="About IMG"
            className="about__img"
          />

          <p className="about__description">
            Aqua Safe es una empresa dedicada a la preservación y reconstrucción
            de ecosistemas acuáticos. Nuestro objetivo es restaurar y proteger
            los hábitats acuáticos en todo el mundo, con un enfoque especial en
            zonas costeras.
          </p>
        </div>

        <div className="about__cards grid">
          <AboutCard
            title="Misión"
            description="Nuestro trabajo se enfoca en la conservación de la biodiversidad marina y en lograr un uso sostenible del medio marino. Para ello, promovemos un cambio en la relación de la sociedad con el mar. Además, brindamos orientación a las empresas para concientizar a su personal sobre la optimización del uso de los recursos naturales."
          />
          <AboutCard
            title="Visión"
            description="Aqua Safe busca establecerse como una entidad de referencia en la conservación marina, tanto a nivel nacional como internacional, con un nivel de influencia suficiente para intervenir un proceso en procesos de decisión relevantes para la protección del medio marino. "
          />
        </div>
      </div>
    </section>
  );
}
