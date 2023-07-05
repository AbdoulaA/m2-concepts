let isHeaderVisible = true;

let areStoresVisible = true;

function togglePlane() {
  let plane = document.getElementById("plane");
  let header = document.getElementById("header");
  let bg = document.getElementById("bg__img");

  bg.classList.toggle("move__bg");
  header.classList.toggle("hide__header");
  plane.classList.toggle("hide__plane");
}

function toggleStoresOn() {
  let plane = document.getElementById("plane");

  if (areStoresVisible == false) {
    plane.classList.remove("scale__plane");
    renderStores();
    areStoresVisible = true
  }

  plane.classList.remove("scale__plane");
  renderStores();
}

let storesList = [
  {
    name: "Chick-Fil-A",
    id: 0,
    url: "./assets/cfa logo.png",
  },
  {
    name: "Starbucks",
    id: 1,
    url: "./assets/starbucks logo.png",
  },
  {
    name: "Coffee and Bagels",
    id: 5,
    url: "./assets/coffee and bagels.png",
  },
  {
    name: "Qdoba Mexican Restaurant",
    id: 3,
    url: "./assets/qdoba logo.png",
  },
  {
    name: "NewsLink",
    id: 4,
    url: "./assets/newslink logo.png",
  },
  {
    name: "Panda Express",
    id: 2,
    url: "./assets/panda express logo.png",
  },
  {
    name: "Blue Mediterranean Bar",
    id: 6,
    url: "./assets/blue logo.png",
  },
];

function renderStores() {
  let stores = document.getElementById("plane__stores");
  storesHtml = ``;
  stores.innerHTML = storesHtml;

  for (i = 0; i < storesList.length; i++) {
    storesHtml += `
    <img src="${storesList[i].url}" alt="${storesList[i].name}" class="plane__store" id = "${i}" onclick="isoStore(event)" />`;

    stores.innerHTML = storesHtml;

    console.log("word");
  }
}

function isoStore(event) {
  let stores = document.getElementById("plane__stores");
  let plane = document.getElementById("plane");
  let storesHtml = ``;
  stores.innerHTML = storesHtml;
  let id = event.target.id;

  plane.classList.toggle("scale__plane");

  if (areStoresVisible === false) {
    renderStores();
    areStoresVisible = true;
  } else if (areStoresVisible === true) {
    storesHtml = `
    <img src="${storesList[id].url}" alt="${storesList[id].name}" class="plane__store" id = "${id}" onclick="isoStore(event)" />
    
    <div class = "store__info">
        <div class = "store__name">
        ${storesList[id].name}
        </div>
    </div>`;

    stores.innerHTML = storesHtml;
    areStoresVisible = false;
  }
}

// setTimeout(() => {
//     renderStores();
//   }, 1000);

// function renderStores() {
//   let storesWrapper = document.querySelector(".plane__stores");
//   let stores = getStores();

//   storesWrapper.innerHTML = stores
//     .map((store) => {
//       return `<a href="" class="plane__link"></a>
//     <img src="${store.url}" alt="" class="plane__store" />
//   </a>`;
//     })
//     .join("");

//   console.log("worked");
// }
