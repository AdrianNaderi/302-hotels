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
            <h1 className={classes.hOne}>Currencies</h1>

            <h2 className={classes.hTwo}>
              EURO: = {(1 / props.currency.conversion_rates.EUR).toFixed(3)}
              {props.currency.base_code}
            </h2>
            <h2 className={classes.hTwo}>
              USD: = {(1 / props.currency.conversion_rates.USD).toFixed(3)}
              {props.currency.base_code}
            </h2>
            <h2 className={classes.hTwo}>
              GBP: = {(1 / props.currency.conversion_rates.GBP).toFixed(3)}
              {props.currency.base_code}
            </h2>

            <h2 className={classes.hTwo}>
              CNY: = {(1 / props.currency.conversion_rates.CNY).toFixed(3)}
              {props.currency.base_code}
            </h2>
            {!isDuplicate && (
              <h2 className={classes.hTwo}>
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
