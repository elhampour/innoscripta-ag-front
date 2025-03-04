const DateExtenstions = {
  format: (date: Date) => {
    date = new Date(date);

    // Days of the week and months arrays
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Get the UTC values
    const dayOfWeek = daysOfWeek[date.getUTCDay()];
    const dayOfMonth = date.getUTCDate();
    const month = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();
    const hours = String(date.getUTCHours()).padStart(2, "0");
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");
    const seconds = String(date.getUTCSeconds()).padStart(2, "0");

    // Format the date and time as 'Monday, 3 March 2025, 14:30:00'
    const formattedDateTime = `${dayOfWeek}, ${dayOfMonth} ${month} ${year}, ${hours}:${minutes}:${seconds} UTC`;

    return formattedDateTime;
  },
};

export default DateExtenstions;
