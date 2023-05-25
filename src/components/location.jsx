export default function Location() {
  return (
    <section className="location section" id="location">
      <h2 className="section__title">Ubicación</h2>

      <div className="location__container container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6327.689420186422!2d-99.1556686850905!3d19.435437706367747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8d27f963277%3A0x8fff590fe646badb!2sInstituto%20Leonardo%20Bravo%2C%20Plantel%20Centro!5e0!3m2!1ses-419!2smx!4v1685025122895!5m2!1ses-419!2smx"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="location__maps"
        ></iframe>
      </div>
    </section>
  );
}
