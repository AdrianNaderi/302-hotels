import React from "react";
import "./CurrencyList.css";

const CurrencyList = (props) => {
  return (
    <React.Fragment>
      <h3>HEJ</h3>
      <h1> {props.currency.base_code}</h1>
      <h2>
        1 EURO: {1 / props.currency.conversion_rates.EUR}
        {props.currency.base_code}
      </h2>
      <h2>
        1 USD: {1 / props.currency.conversion_rates.USD}
        {props.currency.base_code}
      </h2>
      <h2>
        1 GBP is {1 / props.currency.conversion_rates.GBP}
        {props.currency.base_code}
      </h2>
      {
        <h2>
          1 {props.hotellCurr} is
          {1 / props.currencyHotell.conversion_rate} {props.currency.base_code}
        </h2>
      }
    </React.Fragment>
  );
};
export default CurrencyList;
