import "./style.css";

function Button({ content, callback, globalClass, type }) {
  return (
    <button type={type} className={`button ${globalClass}`} onClick={callback}>
      {content}
    </button>
  );
}

export default Button;
