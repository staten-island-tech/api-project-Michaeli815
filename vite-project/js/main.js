import "../styles/style.css";

const URL = "https://deckofcardsapi.com/api/deck/new/draw/?count=52";

const DOMSelectors = {
  allb: document.querySelector("#all"),
  Heartsb: document.querySelector("#Hearts"),
  Spadesb: document.querySelector("#Spades"),
  Cloverb: document.querySelector("#Clubs"),
  Diamondb: document.querySelector("#Diamonds"),
  Royalsb: document.querySelector("#Royals"),
  cardcontainer: document.querySelector(".card-container"),
};


// function ItemDisplay() {
 
//   data.cards.forEach((element)=> document.querySelector(".card-container").insertAdjacentHTML(
//     "beforeend",
//     `<div class="card">
//       <div class="card-image">
//         <img class="pic" src="${element.image}" width="220rem" height="240rem">
//       </div>
//       <div class="card-content">
//         <h3>${element.value}</h3>
//         <p>$${element.suit}</p>
//       </div>
//   </div>`
//   )
// };

// async function getData(URL) {
//   try{
//     const response = await fetch(URL);
//     const data = await response.json();
//     console.log(data)
//     return data;
//   }catch (error) {
//     console.error(error)
//   }
// }
// getData();


function Displaying() {
     fetch(URL)
       .then((response) => response.json())
       .then((data) => {


         data.cards.forEach((element)=> document.querySelector(".card-container").insertAdjacentHTML(    "beforeend",
         `<div class="cards">
           <div class="card-image">
             <img class="pic" src="${element.image}">
           </div>
           <div class="card-content">
             <h3>${element.value}</h3>
             <p>${element.suit}</p>
           </div>
       </div>`)
       
       )})
       .catch((error) => console.log(error));
   }
Displaying();



function displayall() {

fetch(URL)
.then((response) => response.json())
.then((datah) => {

  datah.cards.forEach(()=> filter((element) => element.suit === "HEARTS")
  .forEach((element) => {
    ItemDisplay(element);
  })
  )})
  .catch((error) => console.log(error));
}

// element.filter((element) => element.suit ==="HEARTS")
//   .forEach((element) => {
//       Displaying(element);
//     })
// function displayHearts() {
//   menu
//     .filter((menu) => menu.suit === "HEARTS")
//     .forEach((menu) => {
//       ItemDisplay(menu);
//     });
// }
// function displaySummer() {
//   menu
//     .filter((menu) => menu.Summer === true)
//     .forEach((menu) => {
//       ItemDisplay(menu);
//     });
// }
// function displayWinter() {
//   menu
//     .filter((menu) => menu.winter === true)
//     .forEach((menu) => {
//       ItemDisplay(menu);
//     });
// }
// function displayKids() {
//   menu
//     .filter((menu) => menu.Kids === true)
//     .forEach((menu) => {
//       ItemDisplay(menu);
//     });
// }
// function displayAdults() {
//   menu
//     .filter((menu) => menu.Adult === true)
//     .forEach((menu) => {
//       ItemDisplay(menu);
//     });
// }

function erase() {
  DOMSelectors.cardcontainer.innerHTML = "";
}
// 
// function Designerp() {
//   erase();
//   displayDesigner();
// }

function Allp() {
  erase();
  displayall();
}

// function Summerp() {
//   erase();
//   displaySummer();
// }
// function Winterp() {
//   erase();
//   displayWinter();
// }
// function Kidsp() {
//   erase();
//   displayKids();
// }
// function Adultsp() {
//   erase();
//   displayAdults();
// }

// DOMSelectors.Designerb.addEventListener("click", Designerp);
DOMSelectors.allb.addEventListener("click", Allp);
// DOMSelectors.summerb.addEventListener("click", Summerp);
// DOMSelectors.winterb.addEventListener("click", Winterp);
// DOMSelectors.kidsb.addEventListener("click", Kidsp);
// DOMSelectors.adultsb.addEventListener("click", Adultsp);
// const DOMSelectors = {
//   all: document.querySelector("#all"),
//   author: document.querySelector("#author"),
//   length1: document.querySelector("#length1"),
//   quote: document.querySelector("#quote"),
// };

// function displayall() {
//   fetch(URL)
//     .then((response) => response.json())
//     .then((data) => {
//       document.querySelector(".cards").textContent = data.content;
//     })
//     .catch((error) => console.log(error));
// }

// function displayauthor() {
//   fetch(URL)
//     .then((response) => response.json())
//     .then((data) => {
//       document.querySelector(".cards").textContent = data.author;
//     })
//     .catch((error) => console.log(error));
// }

// function displaylength() {
//   fetch(URL)
//     .then((response) => response.json())
//     .then((data) => {
//       document.querySelector(".cards").textContent = data.length;
//     })
//     .catch((error) => console.log(error));
// }

// DOMSelectors.all.addEventListener("click", displayall);
// DOMSelectors.author.addEventListener("click", displayauthor);
// DOMSelectors.length1.addEventListener("click", displaylength);

// function getData(URL) {
//   fetch(URL)
//     .then((response) => response.json())
//     .then((data) => {
//       document.querySelector(".cards").textContent = data.content;
//     })
//     .catch((error) => console.log(error));
// }
// getData(URL);
