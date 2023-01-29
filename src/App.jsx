import { useState } from "react";
import Form from "./components/Form/index.jsx";
import Header from "./components/Header/index.jsx";
import Home from "./components/Home/index.jsx";
import LandingPage from "./components/LandingPage/index.jsx";
import List from "./components/List/index.jsx";
import TotalMoney from "./components/TotalMoney/index.jsx";
import "./App.css";

export default App;

function App() {
  const [page, setPage] = useState("index");
  const [listTransactions, setListTransactions] = useState([]);

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
          <div className="container d-flex d-flex-column container-home">
            <Home>
              <Form
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
              {listTransactions.length > 0 ? (
                <TotalMoney listTransactions={listTransactions} />
              ) : (
                <></>
              )}
            </Home>
            <List listTransactions={listTransactions} />
          </div>
        </>
      )}
    </div>
  );
}
