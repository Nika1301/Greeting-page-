console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current time: new Date().getHours() )
(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  const currentHours = new Date().getHours();
  if (currentHours >= 6 && currentHours <= 12) {
    return "Good Morning";
  }
  if (currentHours >= 13 && currentHours <= 18) {
    return "Good Afternoon";
  }
  if (currentHours >= 19 && currentHours <= 22) {
    return "Good Evening";
  } else return "Good Night";

  // Code here
}

function getDayColor() {
  let currentDay = new Date().getDay();
  if ((currentDay = "monday")) {
    return "darkgray";
  }
  if ((currentDay = "tuesday" || "wednesday" || "ttursday" || "friday")) {
    return "lightblue";
  } else return "hotpink";
  // Code here
}
display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
console.log(getGreeting(), getDayColor());
