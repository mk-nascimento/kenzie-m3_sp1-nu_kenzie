import { v4 as id } from "uuid";
import Card from "../Card/index.jsx";
import "./style.css";
import emptyCard from "/src/assets/emptyCard.svg";

function List({ listTransactions = [], setListTransactions }) {
  function deleteTransation() {
    setListTransactions(
      listTransactions.filter(
        (transaction) => transaction.uuid != event.target.dataset.content
      )
    );
  }
  return (
    <aside className="aside__aside-list d-flex d-flex-column">
      <h3 className="title-3 c-grey-4">Resumo financeiro</h3>
      <h2
        className={`title-2 c-grey-3 ${
          listTransactions.length > 0 ? "none" : null
        }`}
      >
        Você ainda não possui nenhum lançamento
      </h2>
      <ul
        className={`aside-list${
          listTransactions.length > 3 ? " overflow " : " "
        }d-flex d-flex-column`}
      >
        {listTransactions.length > 0
          ? listTransactions.map((transaction) => (
              <Card
                callback={deleteTransation}
                transaction={transaction}
                key={id()}
              />
            ))
          : [emptyCard, emptyCard, emptyCard].map((card) => (
              <Card img={card} key={id()} />
            ))}
      </ul>
    </aside>
  );
}

export default List;
