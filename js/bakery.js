// Hamburger toggle control
function hamburgerControl() {
  // Gather elements by id attributes and assign variables to them
  let myTopNav = document.getElementById("myTopnav");
  console.log(myTopNav);
  let menuSection = document.getElementById("menuSection");

  // This decision displays on and off the nav items in mobile, the class "navControl" is dynamically inserted into html to accomplish this control myTopNav.className stores the elements class name that toggles between "nav" or "nav navControl" when the hamburger icon is clicked.
  if (myTopNav.className === "nav") {
    myTopNav.className += " navControl"; // myTopNav.className changes class to "nav navControl" this removes nav links when the hamburger icon is clicked see main.css
  } else {
    myTopNav.className = "nav"; // myTopNav.className changes class back to "nav" this displays nav links when the hamburger icon is clicked see main.css
  }
  // This decision controls the margin top of the menu banner section in mobile, the class "menuSectionControl" is dynamically inserted into html to accomplish this control menuSection.className stores the elements class name that could be "menu-section-top" or "menu-section-top menuSectionControl" when the hamburger icon is clicked..

  if (menuSection.className === "menu-section-top") {
    menuSection.className += " menuSectionControl"; // menuSection.className changes class to "menu-section-top menuSectionControl" this affects the menu banner section margin-top when the hamburger icon is clicked see main.css
  } else {
    menuSection.className = "menu-section-top"; // menuSection.className changes class back to "menu-section-top" affects margin-top when the hamburger icon is clicked see main.css
  }
}

// Food Item Multidimensional Array

// Create arrays to hold food category and items

const foodlist = [
  ["Donuts", "Classic glazed, Blueberry, Chocolate, Powdered", "$1.00 ea."],

  [
    "Cookies and Cookie Bars",

    "Chocolate Chip, Oatmeal, Brownies, Turtle Brownies",

    "$1.00 ea.",
  ],

  ["Cake By-the-slice", "Caramel, Chocolate, Carrot, Coconut", "$2.00 ea."],

  [
    "Pastries",

    "Apple Fritters, Cheese Danish, Apple Danish, Bear Claws",

    "$2.00 ea.",
  ],
];

// Function to iterate through the array and create html for the food items

function createListItems(arr) {
  let items = "";

  for (let i = 0; i < arr.length; i++) {
    items += `<h4>${arr[i][0]}</h4> <p class="text-grey">${arr[i][1]} <strong>${arr[i][2]}</strong></p>`;
  }

  return items;
}

// Insert foodlist into the main element in the menu section content in index.html file
const foodItems = createListItems(foodlist);
document.querySelector("main").innerHTML = foodItems;

// JavaScript for store offer
// Declare variables, today stores todays date.
let weekFromToday, day, date, month, year, monthNames, dayNames;
let storeOffer = "";
// creates a new date object with the current date and time:
let today = new Date();

// Create arrays to hold the names of months and days
monthNames = [
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

dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Add 7 days time (added in milliseconds) for the store offer:
// minutes = 60 * 1000
// hours = minutes * 60
// days = hours * 24
// weekFromToday = using getTime() method produces the store offer period 7 days time (added in milliseconds) today.getime() returns today's date + 7 days.
weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

// Collect the parts of the date to show on the page

//  The getDay() method returns the day of the week (from 0 to 6) for the specified date. Note: Sunday is 0, Monday is 1, and so on.
day = dayNames[weekFromToday.getDay()];

//  The getDate() method returns the day of the month (from 1 to 31) for the specified date.
date = weekFromToday.getDate();

// The getMonth() method returns the month (from 0 to 11) for the specified date, according to local time. Note: January is 0, February is 1, and so on.
month = monthNames[weekFromToday.getMonth()];

// The getFullYear() method returns the year (four digits for dates between year 1000 and 9999) of the specified date. For example 2021
year = weekFromToday.getFullYear();

// Create the message with the parts of the date to show on the page using template literal
storeOffer = `<h4><span class="text-primary" style = 'color: #1414b0; font: italic bold 1.5rem "Raleway", Sans-Serif; letter-spacing: .1rem;'>20%</span> Off Pastry Items - Offer Expires Next:</h4>
  <p class= "text-primary" style = 'letter-spacing: .1rem; font-weight: bold;'>(${day} ${month} ${date}, ${year} in 7 days!)</p>`;

//The insertAdjacentHTML() method inserts the above text as HTML, into a specified position that being 'beforebegin' - This inserts the storeoffer text before the main element.

document.querySelector("main").insertAdjacentHTML("beforeend", storeOffer);

//Form validation using regex
const inputs = document.querySelectorAll("input");
// console.log(inputs);

// regex patterns
const patterns = {
  telephone: /^\D*(\d{3})\D*(\d{3})\D*(\d{4})\D*$/,
  name: /^[a-z A-Z]{6,20}$/,
  email: /^[^@]+@[^@.]+\.[a-z]+$/i,
};

// validation function
function validate(field, regex) {
  console.log(regex.test(field.value));
  //regex.test(field.value) flags true or false
  if (regex.test(field.value)) {
    field.className = "valid form-input padding-16";
  } else {
    field.className = "invalid form-input padding-16";
  }
}

// attach keyup events to inputs
inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    // console.log(patterns[e.target.attributes.name.value]);
    // console.log(e.target.attributes.name.value);
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});

// Bootstrap tooltip using jquery
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip({
    trigger: "toggle",
  });
});

// Reload the web page every hour to update the store offer
setInterval(() => {
  location.reload();
}, 1000 * 60 * 60);
