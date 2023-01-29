import styles from "./style.module.css";

function Home({ children }) {
  return (
    <>
      <main className={`${styles.main} d-flex d-flex-column`}>{children}</main>
    </>
  );
}

export default Home;
