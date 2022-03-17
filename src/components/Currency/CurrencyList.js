import React, { useState, useEffect } from "react";
import "./CurrencyList.css";

const CurrencyList = (props) => {
  const [isDuplicate, setIsDuplicate] = useState(false);
  console.log(props.hotellCurr);

  const IsDuplicateHandler = () => {
    if (
      props.hotellCurr.target_code === "EUR" ||
      props.hotellCurr.target_code === "USD" ||
      props.hotellCurr.target_code === "GBP"
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
      <div className="card">
        {
          <div className="container">
            <h1>Currencies</h1>

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
                1 {props.hotellCurr.target_code} is_
                {(1 / props.hotellCurr.conversion_rate).toFixed(3)}
                {props.currency.base_code}
              </h2>
            )}
          </div>
        }
      </div>
    </React.Fragment>
  );
};
export default CurrencyList;
