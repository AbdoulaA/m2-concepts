let isHeaderVisible = true;

function togglePlane() {
  let plane = document.getElementById("plane");
  let header = document.getElementById("header");
  let bg = document.getElementById("bg__img");

  if (isHeaderVisible) {
    bg.classList.toggle("move__bg");
    header.classList.toggle("hide__header");
    return plane.classList.toggle("hide__plane");
  }
  console.log(plane);
}

function togglePlaneOff() {
  let plane = document.getElementById("plane");
  let header = document.getElementById("header");
  let bg = document.getElementById("bg__img");

  bg.classList -= "move__bg";
  header.classList -= "hide__header";
  plane.classList -= "hide__plane";
  isHeaderVisible = true;
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

  for (i = 0; i <= storesList.length; i++) {
    storesHtml += `<a href="" class="plane__link"></a>
    <img src="${storesList[i].url}" alt="${storesList[i].name}" class="plane__store" id = "${i}" onclick="isoStore()" />`;

    stores.innerHTML = storesHtml;

    console.log("word");
  }
}

function isoStore() {
  const planeStores = document.querySelectorAll(".plane__store");

  planeStores.forEach((store) => {
    store.addEventListener("click", () => {
      planeStores.forEach((s) => {
        if (s !== store) {
          s.classList.toggle("hide__stores");
        }
      });
    });
  });
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
