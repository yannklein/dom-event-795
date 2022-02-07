// console.log("Hi Batch #727!!!!");

// ////////
// Select DOM elements
// ////////

// with its ID (Mai)
// const mai = document.querySelector("#mai");
// console.log(mai);
// with its tag type (h2)
const h2 = document.querySelector("h2");
// console.log(h2);
// with its class (group)
const group = document.querySelector(".group");
// console.log(group);
// by nest selection (ul of the group)
const ul = group.querySelector("ul");
// console.log(ul);
// document.querySelector(".group ul");

// select multiple elements (all the card)
const cards = document.querySelectorAll(".card");
// console.log(cards);

// ////////
// Modify the DOM
// ////////

// add an HTML element (Farmate FC)
const ulElement = document.querySelector(".group ul");
// console.log(ulElement);
ulElement.insertAdjacentHTML(
  "beforeend",
  "<li>Farmate <em>FC</em> 🐂</li>"
);

// same but more complex (add Ryota!!)
const kikoeyTeam = document.querySelector("#kikoey ul");
kikoeyTeam.insertAdjacentHTML(
  "afterbegin",
  `<li>
    <img src="https://avatars.githubusercontent.com/u/76512208?v=4" alt="">
    <p>Ryota</p>
  </li>`
);

// change the element style (group background to green)
// Careful! background-color => backgroundColor
group.style.backgroundColor = "lightgreen";

// add a class to the element (add text-white to group)
// Careful! no DOT for classList
group.classList.add("text-white");

// remove it
group.classList.remove("text-white");

// add/remove every 1sec
setInterval(() => {
  // group.classList.toggle("text-white");
}, 1000);

// Read/Write for inputs (change the value in the email input)
const mailInput = document.querySelector("#email");
// console.log(mailInput.value);
mailInput.value = "yann@lewagon.com";

// Read/Write the (inner) text and HTML content (FF RenRaku ⚽️ title)
const ffTrainEQTitle = document.querySelector("#ff-trainEQ h3");
console.log(ffTrainEQTitle.innerText);
console.log(ffTrainEQTitle.innerHTML);

ffTrainEQTitle.innerHTML = "Hello <em>everyone</em>";

// ////////
// Add event listeners
// ////////

// 1. Select an element
// const mai = document.querySelector("#mai");

// // 2. Listen to s click
// mai.addEventListener("click", (event) => {
//   // 3. Change the DOM
//   // event.currentTarget == the element that has been clicked
//   event.currentTarget.classList.toggle("selected");
// });

// 1. Select everyone's picture!
const imgs = document.querySelectorAll(".cards img");
// 2. Iterate over them
imgs.forEach((image) => {
  // 3. Listen to a click on each
  image.addEventListener("click", (event) => {
    // 4. Toggle selected
    event.currentTarget.classList.toggle("selected");
  });
});
