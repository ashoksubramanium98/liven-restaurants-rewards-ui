import LivenLogo from '../../assets/images/livenLogo.webp'
import { links } from '../../config'
import './index.scss'

const Footer = () => {

  const handleRedirectToHome = () => {
    window.open(links.logo, '_self')
  }

  return (
    <div className="footer">
      <div className="footer__img__container">
        <img className="footer__img" src={LivenLogo} alt="Liven logo" onClick={handleRedirectToHome} />
      </div>
    </div>
  );
};

export default Footer;
