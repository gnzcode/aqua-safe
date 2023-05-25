export default function Header() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__socials">
            <a
              className="home__social"
              href="https://www.instagram.com/aqua.safe_/"
              target="_blank"
            >
              <i className="uil uil-instagram"></i>
            </a>
            <a
              className="home__social"
              href="https://github.com/gnzcode/aqua-safe"
              target="_blank"
            >
              <i className="uil uil-github-alt"></i>
            </a>
          </div>

          <div className="home__img">
            <img src="assets/tiburon.png" alt="Tiburon PNG" />
          </div>

          <div className="home__data">
            <h1 className="home__title">AQUA SAFE</h1>
            <p className="home__description">
              Una empresa dedicada a la preservación y conservación de
              ecosistemas acuáticos.
            </p>
            <a className="home__button" href="#contact">
              Contáctanos
              <i className="uil uil-message"></i>
            </a>

            <a className="home__scroll" href="#about">
              <i className="uil uil-mouse-alt"></i>
              <span>Saber más</span>
              <i className="uil uil-arrow-down"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
