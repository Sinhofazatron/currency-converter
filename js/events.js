import { handleInput, handleSubmit, switchCurrencies } from "./convert.js";
import { fetchCodes, handleTabClick } from "./index.js";
import {
  addCurrency,
  handleActionClick,
  handleAddSelectChange,
  handleSingleSelectChange,
} from "./single.js";
import variables from "./variables.js";

const {
  amountInput,
  form,
  switchButton,
  tabs,
  currencyCurrent,
  currencyCurrentList,
  singleSelect,
  addButton,
  addCurrencySelect,
} = variables;

fetchCodes();
amountInput.addEventListener("keyup", handleInput);
form.addEventListener("submit", handleSubmit);
switchButton.addEventListener("click", switchCurrencies);
tabs.forEach((tab) => tab.addEventListener("click", handleTabClick));
currencyCurrent.addEventListener("click", handleActionClick);
currencyCurrentList.addEventListener("click", handleActionClick);
singleSelect.addEventListener("change", handleSingleSelectChange);
addButton.addEventListener("click", addCurrency);
addCurrencySelect.addEventListener("change", handleAddSelectChange);
