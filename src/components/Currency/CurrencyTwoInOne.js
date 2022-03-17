import React, { useEffect, useState, useCallback, useRef } from "react";
import CurrencyList from "./CurrencyList";
import useHttpGet from "../../hooks/useHttpGet";
const Currency = (props) => {
  const [currency, setCurrency] = useState([]);
  const [currencyHotell, setCurrencyHotell] = useState([]);

  let urlVar = useRef(``);

  const { isLoading, error, fetchDataHandler } = useHttpGet({
    url: `${urlVar.current}`,
  });

  const currencyHandler = useCallback(async () => {
    console.log(props.localCurr);
    urlVar.current = `https://v6.exchangerate-api.com/v6/284d94a411d3ab129c840a38/latest/${props.localCurr}`;
    const dataLocal = await fetchDataHandler();
    setCurrency(dataLocal);

    urlVar.current = `https://v6.exchangerate-api.com/v6/284d94a411d3ab129c840a38/pair/${props.localCurr}/${props.hotellCurr}`;
    const dh = await fetchDataHandler();
    setCurrencyHotell(dh);
  }, [fetchDataHandler, urlVar, props.localCurr, props.hotellCurr]);

  useEffect(() => {
    currencyHandler();
  }, [currencyHandler]);

  console.log(currency);
  console.log(currencyHotell);
  return (
    <React.Fragment>
      {!isLoading && currency.length !== 0 && currencyHotell.length !== 0 && (
        <CurrencyList
          currency={currency}
          hotellCurr={currencyHotell}
        ></CurrencyList>
      )}
      {!isLoading &&
        currency.length !== 0 &&
        currencyHotell.length !== 0 &&
        !error && <p>No data</p>}
      {!isLoading && error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
    </React.Fragment>
  );
};

export default Currency;
