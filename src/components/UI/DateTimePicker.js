import { useState } from "react";
import useDateTime from "../../hooks/useDateTime";

const DateTimePicker = (props) => {
  const { fromDate, setFromDate, toDate, setToDate, today, minimumToDate } =
    useDateTime();

  const handleFromDate = (e) => {
    setFromDate(e.target.value);
  };
  const handleToDate = (e) => {
    setToDate(e.target.value);
  };
  return (
    <>
      <label>
        From:
        <input
          type="date"
          value={fromDate}
          onChange={handleFromDate}
          min={today}
        ></input>
      </label>
      <label>
        To:
        <input
          type="date"
          value={toDate}
          onChange={handleToDate}
          min={minimumToDate}
        ></input>
      </label>
    </>
  );
};

export default DateTimePicker;
