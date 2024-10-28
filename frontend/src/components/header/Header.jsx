/* import './Header.css'; */
import './Header.css';

import logo from '../../assets/img/eewdoces_adesivo_com_arco.png';

function Header () {
  const style = {
    div:"head-container-div",
    img:"head-container-img",
    h3: "head-container-h3"
  }

  const title ='E&W'; 

  return (
    <div className={style.div}>
        <img className={style.img} src={logo} />
        <h3 className={style.h3}>{title}</h3>
    </div>
  );
}

export default Header;