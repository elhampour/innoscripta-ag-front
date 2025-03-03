const DateExtenstions = {
  format: (date: Date) => {
    const formattedDateTime =
      new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }) +
      " " +
      new Date(date).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
    return formattedDateTime;
  },
};

export default DateExtenstions;
