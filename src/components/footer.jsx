export default function Footer() {
  return (
    <footer className="footer section">
      <div className="footer__container container grid">
        <div className="footer__copy">
          <div>&copy; AQUA SAFE 2023.</div>
        </div>
        <div className="footer__createdby">
          CREADO POR{" "}
          <a href="https://gnzcode.com/" target="_blank">
            <strong className="footer__gnzcode">GNZCODE</strong>
          </a>
        </div>
      </div>
    </footer>
  );
}
