import "./style.css";

export default Button;

function Button({ text, callback, globalClass }) {
  return (
    <button className={`button ${globalClass}`} onClick={callback}>
      {text}
    </button>
  );
}
