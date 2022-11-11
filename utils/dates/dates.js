/**
 * Returns the current date on the format Y-m-d
 *
 * @returns {string}
 * */
export const getCurrentDateString = () => {
  const currentDate = new Date();
  return `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`;
};

/**
 * Returns the current timestamp
 *
 * @returns {number}
 * */
export const getCurrentTimeStamp = () => {
  const currentDate = new Date();
  return currentDate.getTime();
};

/**
 * Returns the date formatted like 'Sun, October 09, 2022'
 *
 * @param {string} date
 * @returns {string}
 * */
export const formatDate = (date) => {
  const dateDate = new Date(date);
  const formatterDay = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    weekday: "short",
    month: "long",
    day: "2-digit",
  });
  return formatterDay.format(dateDate).replace(/^\w/, (c) => c.toUpperCase());
};
