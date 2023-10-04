import React from "react";
import "../styles/currencies-style.css";
import CurrencyConverter from "../components/currencyAPI";

const Currencies = () => {
  return (
    <div id="currencies-section" className="currency-box">
      <span id="topic">Currencies</span>
      <CurrencyConverter />
    </div>
  );
};
export default Currencies;
