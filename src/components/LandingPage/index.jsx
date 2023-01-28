import Button from "../Button/index.jsx";
import styles from "./style.module.css";

export default LandingPage;

function LandingPage({ setPage }) {
  document.body.classList.add("dark");

  function redirect() {
    document.body.classList.remove("dark");

    setPage("home");
  }

  return (
    <main className={styles.landingPage}>
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
            globalClass="bg-primary c-white Inter"
            callback={redirect}
            text="Iniciar"
          />
        </section>

        <aside>
          <img
            src="/src/assets/landing.svg"
            alt="Landing Page Image"
            aria-label="Landing Page Image"
          />
        </aside>
      </div>
    </main>
  );
}
