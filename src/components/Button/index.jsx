import "./style.css";

function Button({ content, callback, globalClass, type, dataset }) {
  return (
    <button
      type={type}
      className={`button ${globalClass}`}
      onClick={callback}
      data-content={dataset}
    >
      {content}
    </button>
  );
}

export default Button;
