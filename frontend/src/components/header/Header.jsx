/* import './Header.css'; */
import './Header.css';

import logo_default from '../../assets/img/eewdoces_adesivo_com_arco.png';

function Header ({title, logo, style}) {
  const style_default = {
    div:"head-container-div",
    img:"head-container-img",
    h3: "head-container-h3"
  }

  return (
    <div className={style ? style : style_default.div}>
        <img className={style ? style : style_default.img} src={logo==='' ? logo : logo_default} />
        <h3 className={style ? style : style_default.h3}>{title}</h3>
    </div>
  );
}

export default Header;