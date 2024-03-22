export default function DateFormatter(str) {
  const date = new Date(str);
  const daysOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const weekDay = daysOfTheWeek[date.getDay()];
  const [day, year] = [str.split("-")[1], str.split("-")[2]];
  const monthOfTheYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Agust",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthOfTheYear[str.split("-")[0] - 1];
  return `${weekDay}, ${day} ${month} ${year}`;
}
