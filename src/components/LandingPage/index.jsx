import Button from "../Button/index.jsx";
import styles from "./style.module.css";
import nuWhite from "/src/assets/nukenzie-white.svg";
import landingBackground from "/src/assets/landing.svg";

function LandingPage({ setPage }) {
  document.documentElement.classList.add("dark");

  function redirect() {
    document.documentElement.classList.remove("dark");
    setPage("home");
  }

  return (
    <main className={styles.landingPage}>
      <div className="container d-flex d-flex-column">
        <section>
          <img src={nuWhite} alt="White Logo" className="logo" />

          <h1 className="title-1 c-white">
            Centralize o controle das suas finanças
          </h1>

          <p className="headline c-white">de forma rápida e segura</p>

          <Button
            aria-label="Home Button"
            globalClass="bg-primary c-white Inter"
            callback={redirect}
            content="Iniciar"
          />
        </section>

        <aside>
          <img
            src={landingBackground}
            alt="Landing Page Image"
            aria-label="Landing Page Image"
          />
        </aside>
      </div>
    </main>
  );
}

export default LandingPage;
