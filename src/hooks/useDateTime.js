import { useState, useEffect } from "react";

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
    const dateNow = activeDate.getDate().toString();
    return `${yearNow}-${monthNow}-${dateNow}`;
  };

  const today = getTodaysDtpDate();
  const tomorrow = getNextDay(today);
  const [fromDate, setFromDate] = useState(today);
  const [toDate, setToDate] = useState(tomorrow);
  const [minimumToDate, setMinimumToDate] = useState(tomorrow);

  useEffect(() => {
    if (Date.parse(fromDate) >= Date.parse(toDate)) {
      let dateCorrection = getNextDay(fromDate);
      setToDate(dateCorrection);
      setMinimumToDate(dateCorrection);
    }
  }, [fromDate]);

  return {
    fromDate,
    setFromDate,
    setFromDate,
    toDate,
    setToDate,
    today,
    getNextDay,
    minimumToDate,
  };
};

export default useDateTime;
