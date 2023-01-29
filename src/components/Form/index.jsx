import styles from "./style.module.css";
import Button from "../Button/index.jsx";
import Select from "../Select/index.jsx";
import Input from "../Input/index.jsx";
import { useState } from "react";

function Form({ listTransactions, setListTransactions }) {
  const [transation, setTransation] = useState({});
  const [values, setValues] = useState({
    descriptionValue: "",
    numberValue: "",
    typeValue: "",
  });

  function setNewTransaction(event) {
    const target = event.target;

    setTransation({ ...transation, [target.name]: target.value });
  }

  function validateTransation() {
    const { description, value, type } = transation;
    return description && value && type ? true : false;
  }

  function submitForm() {
    event.preventDefault();

    if (validateTransation()) {
      setValues({
        descriptionValue: "",
        numberValue: "",
        typeValue: "",
      });
      setListTransactions([...listTransactions, transation]);
      setTransation({});
    }
  }

  return (
    <>
      <form
        onSubmit={submitForm}
        className={`${styles.homeForm} d-flex d-flex-column`}
      >
        <div className={`${styles.formDescriptionPlace} d-flex d-flex-column`}>
          <label htmlFor="description" className="caption c-grey-4">
            Descrição
          </label>

          <Input
            value={values.descriptionValue}
            id="description"
            name="description"
            type="text"
            placeholder="Digite aqui sua descrição"
            globalClass={`${styles.descriptionInput} bg-grey-1`}
            callback={(event) => {
              setNewTransaction(event);
              setValues({ ...values, descriptionValue: event.target.value });
            }}
          />
          <small>Ex: Compra de roupas</small>
        </div>

        <div className={`${styles.formValuePlace} d-flex d-flex-row`}>
          <div className={`${styles.valuePlace} d-flex d-flex-column`}>
            <label htmlFor="form-value">Valor</label>
            <div
              className={`${styles.valueStyleContainer} bg-grey-1 d-flex d-flex-row`}
            >
              <Input
                value={values.numberValue}
                name="value"
                id="form-value"
                type="number"
                placeholder="99.99"
                globalClass={""}
                callback={(event) => {
                  setNewTransaction(event);
                  setValues({ ...values, numberValue: event.target.value });
                }}
              />
              <p className="headline c-grey-3">R$</p>
            </div>
          </div>

          <div className={`${styles.valuePlaceType} d-flex d-flex-column`}>
            <label htmlFor="form-type">Tipo de valor</label>
            <div className={`${styles.styleSelect} bg-grey-1`}>
              <Select
                value={values.typeValue}
                name="type"
                id="form-type"
                options={["Tipo", "Entrada", "Saída"]}
                globalClass="c-grey-3"
                callback={(event) => {
                  setNewTransaction(event);
                  setValues({ ...values, typeValue: event.target.value });
                }}
              />
            </div>
          </div>
        </div>

        <Button
          type="submit"
          content="Inserir valor"
          globalClass={`bg-primary c-white Inter`}
          callback={null}
        />
      </form>
    </>
  );
}

export default Form;
