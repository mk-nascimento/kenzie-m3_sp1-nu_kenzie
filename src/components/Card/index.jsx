import Button from "../Button/index.jsx";
import "./style.css";
import { FaTrash } from "react-icons/fa";

function Card({ transaction }) {
  const { description, type, value } = transaction;
  console.log(description, type, value);

  return (
    <li className="card-list-item d-flex d-flex-row bg-grey-1">
      <div
        className={`sideBar__colorType ${
          type.toLowerCase() == "entrada" ? "bg-secondary" : "bg-grey-2"
        }`}
      ></div>

      <div className="card-info d-flex d-flex-column">
        <div className="card-info__data d-flex d-flex-column">
          <h3 className="card-info__data-description title-3 c-grey-4">
            {description}
          </h3>

          <p className="card-info__data-type body c-grey-3">{type}</p>
        </div>

        <div className="value-and-trash d-flex d-flex-column">
          <p className="card-info__data-value body c-grey-4">
            R$ <span>{value}</span>
          </p>

          <Button
            content={<FaTrash />}
            callback={null}
            globalClass={"card-button__trash bg-grey-2 d-flex"}
            type="button"
          />
        </div>
      </div>
    </li>
  );
}

export default Card;
