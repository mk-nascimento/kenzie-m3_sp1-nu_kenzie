import { useState } from "react";
import Header from "./components/Header/index.jsx";
import Home from "./components/Home/index.jsx";
import LandingPage from "./components/LandingPage/index.jsx";

export default App;

function App() {
  const [page, setPage] = useState("index");

  function redirect() {
    document.body.classList.add("dark");

    setPage("index");
  }

  return (
    <div className="App">
      {page == "index" ? (
        <LandingPage setPage={setPage} />
      ) : (
        <>
          <Header callback={redirect} />
        </>
      )}
    </div>
  );
}
