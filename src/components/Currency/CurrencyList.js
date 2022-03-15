import React, { useState, useEffect } from "react";
import "./CurrencyList.css";

const CurrencyList = (props) => {
  const [isDuplicate, setIsDuplicate] = useState(false);
  console.log(props.hotellCurr);

  const IsDuplicateHandler = () => {
    if (
      props.hotellCurr === "EUR" ||
      props.hotellCurr === "USD" ||
      props.hotellCurr === "GBP"
    ) {
      setIsDuplicate(true);
    } else {
      setIsDuplicate(false);
    }
  };

  useEffect(() => {
    IsDuplicateHandler();
  }, [IsDuplicateHandler]);

  return (
    <React.Fragment>
      <h3>Currencies</h3>
      <h1> {props.currency.base_code}</h1>
      <h2>
        1 EURO: {(1 / props.currency.conversion_rates.EUR).toFixed(3)}
        {props.currency.base_code}
      </h2>
      <h2>
        1 USD: {(1 / props.currency.conversion_rates.USD).toFixed(3)}
        {props.currency.base_code}
      </h2>
      <h2>
        1 GBP is {(1 / props.currency.conversion_rates.GBP).toFixed(3)}
        {props.currency.base_code}
      </h2>
      {!isDuplicate && (
        <h2>
          1 {props.hotellCurr} is_
          {(1 / props.currencyHotell.conversion_rate).toFixed(3)}
          {props.currency.base_code}
        </h2>
      )}
    </React.Fragment>
  );
};
export default CurrencyList;
