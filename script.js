document.addEventListener("DOMContentLoaded", () => {
  // Display current time in UTC
  const currentTimeUTCElement = document.querySelector(
    '[data-testid="currentTimeUTC"]'
  );
  const updateTime = () => {
    const now = new Date();
    currentTimeUTCElement.textContent = now.toUTCString();
  };
  updateTime();
  setInterval(updateTime, 1000);

  // Display current day of the week
  const currentDayElement = document.querySelector(
    '[data-testid="currentDay"]'
  );
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  currentDayElement.textContent = daysOfWeek[new Date().getUTCDay()];
});
