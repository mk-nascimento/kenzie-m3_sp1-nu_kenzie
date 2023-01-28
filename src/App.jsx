import { useState } from "react";
import LandingPage from "./components/LandingPage/index.jsx";

export default App;

function App() {
  const [page, setPage] = useState("index");

  return (
    <main className="App">
      {page == "index" ? <LandingPage setPage={setPage} /> : <>{}</>}
    </main>
  );
}
