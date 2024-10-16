import LivenLogo from '../../assets/livenLogo.webp'
import { links } from '../../config'
import './index.scss'

const Header = () => {

  const handleRedirectToHome = () => {
    window.open(links.logo, '_self')
  }

  const handleRedirectToAppStore = () => {
    window.open(links.app)
  }

  return (
    <div className="header">
      <div className="header__img__container">
        <img className="header__img" src={LivenLogo} alt="Liven logo" onClick={handleRedirectToHome} />
      </div>
      <div className="header__action" onClick={handleRedirectToAppStore}> Get app </div>
    </div>
  );
};

export default Header;
