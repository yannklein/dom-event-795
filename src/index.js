console.log("Hi Batch #795!!!!");

// ////////
// Select DOM elements
// ////////

// with its ID (Takeshi)
// const takeshi = document.querySelector("#takeshi");
// console.log(takeshi);

// // with its tag type (h2)
// const h2 = document.querySelector("h2");
// console.log(h2);

// // with its class (group)
// const group = document.querySelector(".group");
// console.log(group);

// // by nest selection (ul of the group)
// const ul = group.querySelector("ul");
// console.log(ul);

// // select multiple elements (all the card)
// const cards = document.querySelectorAll(".card");
// console.log(cards);

// ////////
// Modify the DOM
// ////////

// add an HTML element (Lickwarsenal Club)
const ul = document.querySelector(".group ul");
console.log(ul);
ul.insertAdjacentHTML(
  "beforeend",
  "<li>Lickwarsenal <em>Club</em> 🐂</li>"
);

// same but more complex (add Dongwook!!!)
const teamMembers = document.querySelector("#styleasy ul");
console.log(teamMembers);
teamMembers.insertAdjacentHTML(
  "afterbegin",
  `<li>
    <img src="https://avatars.githubusercontent.com/u/56187167?v=4" alt="">
    <p>Dongwook</p>
  </li>`
);

// change the element style (group background to green)
// Careful! background-color => backgroundColor
const group = document.querySelector(".group");
console.log(group);
group.style.backgroundColor = "green";

// add a class to the element (add text-white to group)
// Careful! no DOT for classList
group.classList.add("text-white");

// remove it
group.classList.remove("text-white");

// add/remove every 1sec
// setInterval(() => {
//   group.classList.toggle("text-white");
// }, 1000);

// Read/Write for inputs (change the value in the email input)
const email = document.querySelector("#email");
console.log(email);
console.log(email.value);
email.value = "yann@lewagon.org";

// Read/Write the (inner) text and HTML content (FF TraQ ⚽️ title)
const fftraQ = document.querySelector("#ff-traq h3");
console.log(fftraQ);
console.log(fftraQ.innerText);
console.log(fftraQ.innerHTML);

// fftraQ.innerHTML = ""; // remove every that is inside a certain element
fftraQ.innerHTML = "<em>Super FF</em> TraQ ⚽️";

// ////////
// Add event listeners
// ////////

// // 1. Select elements (takeshi's picture)
// const takeshiPicture = document.querySelector("#takeshi");
// console.log(takeshiPicture);

// // 2. Listen to an event (a click on takeshi's picture)
// takeshiPicture.addEventListener("click", (event) => {
//   console.log(event);
//   console.log(event.currentTarget); // the element that has been clicked (takeshi pic in our case)
//   // 3. Change the DOM (add the .selected class top takeshi's picture)
//   event.currentTarget.classList.toggle("selected");
// });

// 1. Select elements (takeshi's picture)
const pictures = document.querySelectorAll(".card img");
console.log(pictures);

pictures.forEach((picture) => {
  // 2. Listen to an event (a click on takeshi's picture)
  picture.addEventListener("click", (event) => {
    console.log(event);
    // debugger
    console.log(event.currentTarget); // the element that has been clicked (takeshi pic in our case)
    // 3. Change the DOM (add the .selected class top takeshi's picture)
    event.currentTarget.classList.toggle("selected");
  });
});
