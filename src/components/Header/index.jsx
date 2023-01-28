import Button from "../Button/index.jsx";
import styles from "./style.module.css";

export default Header;

function Header({ callback }) {
  return (
    <header className={`${styles.defaultHeader} bg-grey-1`}>
      <div className="container d-flex d-flex-row">
        <img
          className="logo"
          src="/src/assets/nukenzie-black.svg"
          alt="Black Logo"
        />

        <Button
          callback={callback}
          globalClass="Nunito bg-grey-2"
          text="Inicio"
        />
      </div>
    </header>
  );
}
