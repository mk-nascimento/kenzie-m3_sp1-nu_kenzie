import { v4 as uuid } from "uuid";
import "./style.css";

function Select({ name, id, options = [], globalClass, callback, value }) {
  return (
    <select
      className={`select-component ${globalClass}`}
      name={name}
      id={id}
      onChange={callback}
      defaultValue={value}
    >
      {options.map((option) => (
        <option key={uuid()} value={option}>
          {`${option}‎ ‎ ‎ ‎ ‎ ‎ ‎`}
        </option>
      ))}
    </select>
  );
}

export default Select;
