import "./style.css";

export default Card;

function Card({ transation = [] }) {
  return (
    <>
      {transation.length <= 0 ? (
        <></>
      ) : (
        <li>
          <p>{transation}</p>
        </li>
      )}
    </>
  );
}
