import "./style.css";

function Form({ listTransactions, setListTransactions }) {
  return (
    <form>
      <div className="form__description-place">
        <input name="description" type="text" />
      </div>

      <div className="form__value-place">
        <input name="value" id="form-value" type="text" />

        <select name="type" id="form-type">
          <option value selected disabled></option>
        </select>
      </div>
    </form>
  );
}
