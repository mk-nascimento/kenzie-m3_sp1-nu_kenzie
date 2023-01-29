import { v4 as id } from "uuid";
import Card from "../Card/index.jsx";
import "./style.css";

function List({ listTransactions = [] }) {
  return (
    <>
      {listTransactions.length > 0 ? (
        <aside className="aside__aside-list">
          <ul className="aside-list d-flex d-flex-column">
            {listTransactions.map((transaction) => (
              <Card transaction={transaction} key={id()} />
            ))}
          </ul>
        </aside>
      ) : (
        <aside className="aside__empty-list">
          <img src="src/assets/emptyList.svg" alt="empty list" />
        </aside>
      )}
    </>
  );
}

export default List;
