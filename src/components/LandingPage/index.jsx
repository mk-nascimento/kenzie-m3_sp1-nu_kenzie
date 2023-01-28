import Button from "../Button/index.jsx";
import styles from "./style.module.css";

export default LandingPage;

function LandingPage({ setPage }) {
  function redirect() {
    setPage("home");
  }

  return (
    <div className={styles.landingPage}>
      {document.body.classList.add("dark")}

      <div className="container d-flex d-flex-column">
        <section>
          <img
            src="/src/assets/nukenzie-white.svg"
            alt="White Logo"
            className="logo"
          />

          <h1 className="title-1 c-white">
            Centralize o controle das suas finanças
          </h1>

          <p className="headline c-white">de forma rápida e segura</p>

          <Button
            aria-label="Home Button"
            globalClass="bg-primary c-white"
            callback={redirect}
            text="Iniciar"
          />
        </section>

        <aside className="landingPage-aside">
          <img
            src="/src/assets/landing.svg"
            alt="Landing Page Image"
            aria-label="Landing Page Image"
          />
        </aside>
      </div>
    </div>
  );
}
