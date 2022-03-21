import React, { useState, useEffect, useCallback } from "react";
import classes from "./CurrencyList.module.css";

const CurrencyList = (props) => {
  const [isDuplicate, setIsDuplicate] = useState(false);
  console.log(props.hotellCurr);

  const IsDuplicateHandler = useCallback(async () => {
    if (
      props.hotellCurr.target_code === "EUR" ||
      props.hotellCurr.target_code === "USD" ||
      props.hotellCurr.target_code === "GBP"
    ) {
      setIsDuplicate(true);
    } else {
      setIsDuplicate(false);
    }
  }, [props.hotellCurr.target_code]);

  useEffect(() => {
    IsDuplicateHandler();
  }, [IsDuplicateHandler]);

  return (
    <React.Fragment>
      <div className={classes.card}>
        {
          <div className={classes.container}>
            <h1>Currencies</h1>

            <h2>
              EURO: = {(1 / props.currency.conversion_rates.EUR).toFixed(3)}
              {props.currency.base_code}
            </h2>
            <h2>
              USD: = {(1 / props.currency.conversion_rates.USD).toFixed(3)}
              {props.currency.base_code}
            </h2>
            <h2>
              GBP: = {(1 / props.currency.conversion_rates.GBP).toFixed(3)}
              {props.currency.base_code}
            </h2>

            <h2>
              CNY: = {(1 / props.currency.conversion_rates.CNY).toFixed(3)}
              {props.currency.base_code}
            </h2>
            {!isDuplicate && (
              <h2>
                {props.hotellCurr.target_code} <span> = </span>
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
