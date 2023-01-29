import "./style.css";

function Input({ name, id, type, placeholder, globalClass, callback, value }) {
  return (
    <input
      onChange={callback}
      className={`input-component ${globalClass}`}
      name={name}
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
    />
  );
}

export default Input;
