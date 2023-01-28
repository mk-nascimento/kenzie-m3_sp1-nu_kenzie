import { v4 as id } from "uuid";
import Card from "../Card/index.jsx";
import "./style.css";

function List({ listTransactions }) {
  return (
    <ul className="d-flex d-flex-column">
      {listTransactions.map((transaction) => (
        <Card transaction={transaction} key={id} />
      ))}
    </ul>
  );
}
