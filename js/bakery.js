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
