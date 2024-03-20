import "./footer.css"
import { Socials } from "./footerComponents/socials/Socials.jsx";

function Footer() {
  return (
    <footer>
      <div className="footer__wrapper">
            <h4>Find us on:</h4>
            <Socials />
            <small id="copyright">©Fireplace Palace</small>
            <a href="mailto:example@example.com" id="email">info@fireplace.co.uk</a>
        </div>
    </footer>
  );
}

export default Footer;