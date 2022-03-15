import React, { useEffect, useState, useCallback } from "react";
import "./Currency.css";
import CurrencyList from "./CurrencyList";
const Currency = (props) => {
  const [currency, setCurrency] = useState([]);
  const [hotellCurrency, setHotellCurrency] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCurrency = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/284d94a411d3ab129c840a38/latest/${props.localCurr}`
      );

      const responseHotell = await fetch(
        `https://v6.exchangerate-api.com/v6/284d94a411d3ab129c840a38/pair/${props.localCurr}/${props.hotellCurr}`
      );

      if (!response.ok || !responseHotell.ok) {
        throw new Error("Something went wrong");
      }

      const dataHotell = await responseHotell.json();
      const data = await response.json();

      setCurrency(data);
      setHotellCurrency(dataHotell);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, [props.hotellCurr, props.localCurr]);

  useEffect(() => {
    fetchCurrency();
  }, [fetchCurrency]);

  return (
    <React.Fragment>
      <div className="card">
        <div className="container">
          {!isLoading &&
            currency.length !== 0 &&
            hotellCurrency.length !== 0 && (
              <CurrencyList
                currency={currency}
                currencyHotell={hotellCurrency}
                hotellCurr={props.hotellCurr}
              ></CurrencyList>
            )}
          {!isLoading && currency.length === 0 && !error && <p>No data</p>}
          {!isLoading && error && <p>{error}</p>}
          {isLoading && <p>Loading...</p>}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Currency;
