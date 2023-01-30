import Button from "../Button/index.jsx";
import styles from "./style.module.css";
import nuBlack from "/src/assets/nukenzie-black.svg";

function Header({ callback }) {
  return (
    <header className={`${styles.defaultHeader} bg-grey-1`}>
      <div className="container d-flex d-flex-row">
        <img className="logo" src={nuBlack} alt="Black Logo" />

        <Button
          callback={callback}
          globalClass="Nunito bg-grey-2"
          content="Inicio"
        />
      </div>
    </header>
  );
}

export default Header;
