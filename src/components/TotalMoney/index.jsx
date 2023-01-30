import styles from "./style.module.css";

function TotalMoney({ listTransactions = [] }) {
  function sumTransactions() {
    return listTransactions
      .map(({ value, type }) =>
        type.toLowerCase() == "entrada" ? value * 1 : value * -1
      )
      .reduce((acc, currentValue) => acc + currentValue, 0);
  }

  return (
    <>
      <div className={`${styles.totalMoney} d-flex d-flex-column`}>
        <div className={`${styles.totalValue} d-flex d-flex-row title-3`}>
          <h3 className="c-grey-4">Valor total:</h3>
          <p className="c-primary">
            R${" "}
            <span>
              {sumTransactions().toFixed(2).toString().replace(".", ",")}
            </span>
          </p>
        </div>
        <p className="body c-grey-3">O valor se refere ao saldo</p>
      </div>
    </>
  );
}

export default TotalMoney;
