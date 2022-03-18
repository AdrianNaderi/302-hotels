import { useContext, useEffect } from "react";
import useDateTime from "../../hooks/useDateTime";
import TimespanContext from "../../store/timespan-context";

const DateTimePicker = (props) => {
  const { fromDate, setFromDate, toDate, setToDate, today, minimumToDate } =
    useDateTime();
  const ctx = useContext(TimespanContext);
  useEffect(() => {
    ctx.handleTimespan(fromDate, toDate);
  }, [fromDate, toDate, ctx]);

  const handleFromDate = (e) => {
    setFromDate(e.target.value);
  };

  const handleToDate = (e) => {
    setToDate(e.target.value);
  };

  return (
    <>
      <div className="col-2 form-floating">
        <input
          id="floating-from"
          className="form-control"
          type="date"
          value={fromDate}
          onChange={handleFromDate}
          min={today}
        ></input>
        <label htmlFor="floating-from fw-bold">Check-In</label>
      </div>
      <div className="col-2 form-floating">
        <input
          id="floating-to"
          className="form-control"
          type="date"
          value={toDate}
          onChange={handleToDate}
          min={minimumToDate}
        ></input>
        <label htmlFor="floating-to fw-bold">Check-Out</label>
      </div>
    </>
  );
};

export default DateTimePicker;
