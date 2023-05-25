export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contacto</h2>
      <span className="section__subtitle">Envía un mensaje</span>

      <div className="contact__container container grid">
        <div className="contact__socials">
          <a
            className="contact__social"
            href="mailto:aquas4fe@gmail.com"
            target="_blank"
          >
            <span className="contact__social-icon">
              <i className="uil uil-envelope"></i>
            </span>
            Email
          </a>
          <a
            className="contact__social"
            href="https://www.instagram.com/aqua.safe_/"
            target="_blank"
          >
            <span className="contact__social-icon">
              <i className="uil uil-instagram"></i>
            </span>
            Instagram
          </a>
          <a
            className="contact__social"
            href="https://github.com/gnzcode/aqua-safe"
            target="_blank"
          >
            <span className="contact__social-icon">
              <i className="uil uil-github-alt"></i>
            </span>
            Github
          </a>
        </div>
        <form className="contact__form">
          <input
            type="text"
            placeholder="Nombre"
            name="fullname"
            id="fullname"
            className="contact__input"
          />
          <input
            type="email"
            placeholder="Correo electrónico "
            name="email"
            id="email"
            className="contact__input"
          />
          <textarea
            className="contact__input contact__input--textarea"
            placeholder="Tu Mensaje"
          ></textarea>
          <button disabled className="contact__button" type="submit">
            Enviar
            <i className="fa-regular fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </section>
  );
}
