import React, { useState, useEffect, useCallback } from "react";
import classes from "./CurrencyList.module.css";

const CurrencyList = (props) => {
  const [isDuplicate, setIsDuplicate] = useState(false);
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
      <div className="container">
        <div className={classes.card}>
          <div className={`bg-dark bg-opacity-50 ${classes.test}`}>
            {
              <div className={`row col-12 ${classes.currencytitle}`}>
                <div className={`row col-12 ${classes.currency}`}>
                  <h2>Currencies</h2>
                </div>
                <div className={"row"}>
                  {" "}
                  <div className={`col-6 ${classes.extracurrency}`}>
                    {" "}
                    <h2>
                      EURO: ={" "}
                      {(1 / props.currency.conversion_rates.EUR).toFixed(3)}
                      {props.currency.base_code}
                    </h2>
                    <h2>
                      CNY: ={" "}
                      {(1 / props.currency.conversion_rates.CNY).toFixed(3)}
                      {props.currency.base_code}
                    </h2>
                    <hr />
                  </div>
                  <div className={`col-6 ${classes.extracurrency}`}>
                    <h2>
                      USD: ={" "}
                      {(1 / props.currency.conversion_rates.USD).toFixed(3)}
                      {props.currency.base_code}
                    </h2>
                    <h2>
                      GBP: ={" "}
                      {(1 / props.currency.conversion_rates.GBP).toFixed(3)}
                      {props.currency.base_code}
                    </h2>
                    <hr />
                  </div>
                </div>

                <div className={` row col-12 ${classes.extracurrency}`}>
                  <h2 className={classes.hTwo}></h2>
                  {!isDuplicate && (
                    <h2>
                      {props.hotellCurr.target_code} <span> = </span>
                      {(1 / props.hotellCurr.conversion_rate).toFixed(3)}
                      {props.currency.base_code}
                      <hr />
                    </h2>
                  )}
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default CurrencyList;
