import React, { useState } from "react";

const TimespanContext = React.createContext({
  timespan: 0,
  handleTimespan: (fromdate, todate) => {},
});

export const TimespanContextProvider = (props) => {
  const [timespan, setTimespan] = useState(1);
  const calculateTimeSpan = (from, to) => {
    const diff = new Date(to) - new Date(from);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    setTimespan(days);
    console.log(days);
  };

  const handleTimespan = (fromdate, todate) => {
    calculateTimeSpan(fromdate, todate);
  };
  return (
    <TimespanContext.Provider
      value={{ timespan: timespan, handleTimespan: handleTimespan }}
    >
      {props.children}
    </TimespanContext.Provider>
  );
};

export default TimespanContext;
