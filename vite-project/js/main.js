import "../styles/style.css";

const URL = "https://deckofcardsapi.com/api/deck/new/draw/?count=52";

const DOMSelectors = {
  allb: document.querySelector("#all"),
  Heartsb: document.querySelector("#designer"),
  Spadesb: document.querySelector("#summer"),
  Cloverb: document.querySelector("#winter"),
  Diamondb: document.querySelector("#kids"),
  Royalsb: document.querySelector("#adults"),
  cardcontainer: document.getElementsByClassName("card-container"),
};

function erase() {
  DOMSelectors.cardcontainer.innerHTML = "";
}

function ItemDisplay(URL) {
  document.querySelector(".cardcontainer").insertAdjacentHTML(
    "beforeend",
    `<div class="card">
      <div class="card-image">
        <img class="pic" src="${URL.image}" width="220rem" height="240rem">
      </div>
      <div class="card-content">
        <h3>${URL.value}</h3>
        <p>$${URL.suit}</p>
      </div>
  </div>`
  );
}

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

function Displaying() {
     fetch(URL)
       .then((response) => response.json())
       .then((data) => {
        //  document.querySelector(".cards").textContent = data.cards;
        //  console.log(data)

         data.cards.forEach((element)=> console.log(element.code))

         data.cards.forEach((element)=> document.querySelector(".card-container").insertAdjacentHTML("beforeend",
         `<div>
         <h2 class="cards">${element.code}</h2>
         </div>`)
       )})
       .catch((error) => console.log(error));
   }
Displaying();



// function displayall() {
//   menu
//     .filter((menu) => menu.All === true)
//     .forEach((menu) => {
//       ItemDisplay(menu);
//     });
// }

// function displayDesigner() {
//   menu
//     .filter((menu) => menu.Designer === true)
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

// function Designerp() {
//   erase();
//   displayDesigner();
// }

// function Allp() {
//   erase();
//   displayall();
// }

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
// DOMSelectors.allb.addEventListener("click", Allp);
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
