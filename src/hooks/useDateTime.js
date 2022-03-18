import { useState, useEffect} from "react";

const useDateTime = () => {
  const getTodaysDtpDate = () => {
    const dateTime = new Date();
    const yearNow = dateTime.getFullYear().toString();
    const monthNow =
      dateTime.getMonth() + 1 < 10
        ? `0${dateTime.getMonth() + 1}`
        : (dateTime.getMonth() + 1).toString();
    const dateNow = dateTime.getDate().toString();
    return `${yearNow}-${monthNow}-${dateNow}`;
  };

  const getNextDay = (date) => {
    let activeDate = new Date(date);
    activeDate.setDate(activeDate.getDate() + 1);
    const yearNow = activeDate.getFullYear().toString();
    const monthNow =
      activeDate.getMonth() + 1 < 10
        ? `0${activeDate.getMonth() + 1}`
        : (activeDate.getMonth() + 1).toString();
    const dateNow =
      activeDate.getDate() < 10
        ? `0${activeDate.getDate()}`
        : activeDate.getDate().toString();
    return `${yearNow}-${monthNow}-${dateNow}`;
  };

  const today = getTodaysDtpDate();
  const tomorrow = getNextDay(today);

  const [fromDate, setFromDate] = useState(
    localStorage.getItem("fromdate") === null
      ? today
      : localStorage.getItem("fromdate")
  );
  const [toDate, setToDate] = useState(
    localStorage.getItem("todate") === null
      ? today
      : localStorage.getItem("todate")
  );
  const [minimumToDate, setMinimumToDate] = useState(tomorrow);

  useEffect(() => {
    const from = Date.parse(fromDate);
    const to = Date.parse(toDate);

    let referenceDate = getNextDay(fromDate);
    if (from >= to) {
      setToDate(referenceDate);
      setMinimumToDate(referenceDate);
    } else {
      setMinimumToDate(referenceDate);
    }
    localStorage.setItem("fromdate", fromDate);
    localStorage.setItem("todate", toDate);
  }, [fromDate, toDate]);

  return {
    fromDate,
    setFromDate,
    toDate,
    setToDate,
    today,
    getNextDay,
    minimumToDate,
  };
};

export default useDateTime;
