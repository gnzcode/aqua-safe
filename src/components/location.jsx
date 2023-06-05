export default function Location() {
  return (
    <section className="location section" id="location">
      <h2 className="section__title">Ubicación</h2>

      <div className="location__container container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233.03983474989772!2d-86.87678417985424!3d20.846345525537124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e88417d64d477%3A0xdf61e94a7868a760!2sRafael%20E.%20Melgar%2C%2077580%20Puerto%20Morelos%2C%20Q.R.!5e0!3m2!1ses-419!2smx!4v1685719857075!5m2!1ses-419!2smx"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="location__maps"
        ></iframe>
      </div>
    </section>
  );
}
