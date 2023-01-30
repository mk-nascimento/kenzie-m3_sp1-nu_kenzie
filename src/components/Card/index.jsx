import "./style.css";
import Button from "../Button/index.jsx";
import { FaTrash } from "react-icons/fa";

function Card({ transaction, img, callback }) {
  return transaction ? (
    <li className="card-list-item d-flex d-flex-row bg-grey-1">
      <div
        className={`sideBar__colorType ${
          transaction.type.toLowerCase() == "entrada"
            ? "bg-secondary"
            : "bg-grey-2"
        }`}
      ></div>

      <div className="card-info d-flex d-flex-column">
        <div className="card-info__data d-flex d-flex-column">
          <h3 className="card-info__data-description title-3 c-grey-4">
            {transaction.description}
          </h3>

          <p className="card-info__data-type body c-grey-3">
            {transaction.type}
          </p>
        </div>

        <div className="value-and-trash d-flex d-flex-column">
          <p className="card-info__data-value body c-grey-4">
            R${" "}
            <span>
              {(transaction.value * 1).toFixed(2).toString().replace(".", ",")}
            </span>
          </p>

          <Button
            dataset={transaction.uuid}
            content={<FaTrash />}
            callback={callback}
            globalClass={"card-button__trash bg-grey-2 d-flex"}
            type="button"
          />
        </div>
      </div>
    </li>
  ) : (
    <li className="card-empty-item">
      <img src={img} alt="empty card" />
    </li>
  );
}

export default Card;
