/* import './Header.css'; */
import './Header.css';
function Header ({title, logo, style}) {
  return (
    <div className={style.div}>
        <img className={style.img} src={logo} />
        <h3 className={style.h3}>{title}</h3>
    </div>
  );
}

export default Header;