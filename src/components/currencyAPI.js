import React, { useEffect, useState } from "react";
import Freecurrencyapi from "@everapi/freecurrencyapi-js";
import "../styles/currencyAPI-styles.css";

const freecurrencyapi = new Freecurrencyapi(
  "fca_live_HTkXU6zDfGoPRgioZo8AZ0m2r2Q18JHHPEiCMT34"
);

const currencyFlags = [
  { code: "EUR", emoji: "🇪🇺" },
  { code: "USD", emoji: "🇺🇸" },
  { code: "JPY", emoji: "🇯🇵" },
  { code: "BGN", emoji: "🇧🇬" },
  { code: "CZK", emoji: "🇨🇿" },
  { code: "DKK", emoji: "🇩🇰" },
  { code: "GBP", emoji: "🇬🇧" },
  { code: "HUF", emoji: "🇭🇺" },
  { code: "PLN", emoji: "🇵🇱" },
  { code: "RON", emoji: "🇷🇴" },
  { code: "SEK", emoji: "🇸🇪" },
  { code: "CHF", emoji: "🇨🇭" },
  { code: "ISK", emoji: "🇮🇸" },
  { code: "NOK", emoji: "🇳🇴" },
  { code: "HRK", emoji: "🇭🇷" },
  { code: "RUB", emoji: "🇷🇺" },
  { code: "TRY", emoji: "🇹🇷" },
  { code: "AUD", emoji: "🇦🇺" },
  { code: "BRL", emoji: "🇧🇷" },
  { code: "CAD", emoji: "🇨🇦" },
  { code: "CNY", emoji: "🇨🇳" },
  { code: "HKD", emoji: "🇭🇰" },
  { code: "IDR", emoji: "🇮🇩" },
  { code: "ILS", emoji: "🇮🇱" },
  { code: "INR", emoji: "🇮🇳" },
  { code: "KRW", emoji: "🇰🇷" },
  { code: "MXN", emoji: "🇲🇽" },
  { code: "MYR", emoji: "🇲🇾" },
  { code: "NZD", emoji: "🇳🇿" },
  { code: "PHP", emoji: "🇵🇭" },
  { code: "SGD", emoji: "🇸🇬" },
  { code: "THB", emoji: "🇹🇭" },
  { code: "ZAR", emoji: "🇿🇦" },
];
function CurrencyConverter() {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(null);

  useEffect(() => {
    freecurrencyapi
      .currencies()
      .then((response) => {
        const currencyList = Object.keys(response.data);
        setCurrencies(currencyList);
        setFromCurrency(currencyList[0]);
        setToCurrency(currencyList[1]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  useEffect(() => {
    if (fromCurrency && toCurrency) {
      freecurrencyapi
        .latest({
          base_currency: fromCurrency,
          currencies: toCurrency,
        })
        .then((response) => {
          const exchangeRates = response.data;
          setResult((exchangeRates[toCurrency] * amount).toFixed(2));
        })
        .catch((error) => {
          console.error(error);
          setResult(null);
        });
    }
  }, [fromCurrency, toCurrency, amount]);

  const copyCurrenciesToClipboard = () => {
    const currenciesText = currencies.join(", ");
    navigator.clipboard.writeText(currenciesText);
    alert("Currencies copied to clipboard!");
  };

  return (
    <div className="currency-container">
      <div className="currency-conversion-box">
        <h1>Currency Converter</h1>
        <div className="input-row-container">
          {/* Amount Container */}
          <div className="input-container">
            <div className="input-header">Amount</div>
            <div className="input-field">
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={handleAmountChange}
              />
            </div>
          </div>

          {/* From Container */}
          <div className="input-container">
            <div className="input-header">From</div>
            <div className="input-field">
              <select
                id="fromCurrency"
                value={fromCurrency}
                onChange={handleFromCurrencyChange}
              >
                {currencies.map((currency) => (
                  <option key={currency} value={currency}>
                    {
                      currencyFlags.find((flag) => flag.code === currency)
                        ?.emoji
                    }{" "}
                    {currency}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* To Container */}
          <div className="input-container">
            <div className="input-header">To</div>
            <div className="input-field">
              <select
                id="toCurrency"
                value={toCurrency}
                onChange={handleToCurrencyChange}
              >
                {currencies.map((currency) => (
                  <option key={currency} value={currency}>
                    {
                      currencyFlags.find((flag) => flag.code === currency)
                        ?.emoji
                    }{" "}
                    {currency}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="result-container">
          {result !== null && (
            <p>
              {amount} {fromCurrency} is equal to {result} {toCurrency}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CurrencyConverter;
