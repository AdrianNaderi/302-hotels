import React, { useEffect, useState, useCallback } from "react";
import CurrencyHotell from "./CurrencyFetchHotell";
import useHttpGet from "../../hooks/useHttpGet";
import LoadingSpinner from "../UI/LoadingSpinner";
const Currency = (props) => {
  const [currency, setCurrency] = useState([]);

  const { isLoading, error, fetchDataHandler } = useHttpGet({
    url: `https://v6.exchangerate-api.com/v6/a984a64b5874fde57d5f46f7/latest/${props.localCurr}`,
  });

  const currencyHandler = useCallback(async () => {
    let dataLocal = await fetchDataHandler();
    setCurrency(dataLocal);
  }, [fetchDataHandler]);

  useEffect(() => {
    currencyHandler();
  }, [currencyHandler]);

  return (
    <React.Fragment>
      {!isLoading && currency.length !== 0 && (
        <CurrencyHotell
          currency={currency}
          hotellCurr={props.hotellCurr}
          localCurr={props.localCurr}
        ></CurrencyHotell>
      )}
      {!isLoading && currency.length === 0 && !error && <p>No data</p>}
      {!isLoading && error && <p>{error}</p>}
      {isLoading && (
        <p>
          <LoadingSpinner />
        </p>
      )}
    </React.Fragment>
  );
};
export default Currency;
