import "../styles/style.css";

const URL = "https://api.quotable.io/random";

const DOMSelectors = {
  all: document.querySelector("#all"),
  author: document.querySelector("#author"),
  length1: document.querySelector("#length1"),
  quote: document.querySelector("#quote"),
};

function displayall() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".cards").textContent = data.content;
    })
    .catch((error) => console.log(error));
}

function displayauthor() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".cards").textContent = data.author;
    })
    .catch((error) => console.log(error));
}

function displaylength() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".cards").textContent = data.length;
    })
    .catch((error) => console.log(error));
}

DOMSelectors.all.addEventListener("click", displayall);
DOMSelectors.author.addEventListener("click", displayauthor);
DOMSelectors.length1.addEventListener("click", displaylength);

function getData(URL) {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".cards").textContent = data.content;
    })
    .catch((error) => console.log(error));
}
getData(URL);
