import React, { useState } from "react";

const TimespanContext = React.createContext({
  timespan: 0,
  fromDate: "",
  toDate: "",
  handleTimespan: (fromdate, todate) => {},
});

export const TimespanContextProvider = (props) => {
  const [timespan, setTimespan] = useState(1);
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();

  const calculateTimeSpan = (from, to) => {
    const diff = new Date(to) - new Date(from);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    setTimespan(days);
  };

  const handleTimespan = (fromdate, todate) => {
    setFromDate(fromdate);
    setToDate(todate);
    calculateTimeSpan(fromdate, todate);
  };
  return (
    <TimespanContext.Provider
      value={{ timespan, handleTimespan, fromDate, toDate }}
    >
      {props.children}
    </TimespanContext.Provider>
  );
};

export default TimespanContext;
