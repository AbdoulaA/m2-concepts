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

function togglePlaneForm() {
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
    areStoresVisible = true;
  }
}

function togglePlaneOff() {
  let plane = document.getElementById("plane");
  let header = document.getElementById("header");
  let bg = document.getElementById("bg__img");

  bg.classList.remove("move__bg");
  header.classList.remove("hide__header");
  plane.classList.remove("hide__plane");
}

function togglePlaneOn() {
  let plane = document.getElementById("plane");
  let header = document.getElementById("header");
  let bg = document.getElementById("bg__img");

  bg.classList.add("move__bg");
  header.classList.add("hide__header");
  plane.classList.add("hide__plane");
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
    name: "Qdoba Mexican Eats",
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
        <div class = "store__apply">
            <a href="./form.html" class= "store__apply--link">
            Apply Now!
            </a>
        </div>
    </div>`;

    stores.innerHTML = storesHtml;
    areStoresVisible = false;
  }
}

function ownerText(event) {
  let ownerText = document.getElementById("owner-text");
  id = event.target.id;

  if (id == "leonard") {
    ownerText.innerHTML = `<i class="fa-solid fa-arrow-left back" onclick="returnText()"></i>
    <div class="about-us__title">Leonard Mickens</div>
        <div class="about-us__subtitle">
          <p>
          <span class="role">President</span><br><br>in charge of day to day operations and oversees the customer service and loss prevention programs.  

          He has received the 2011, 2012, and 2013 Customer Service Champion awards at DFW airport for best vendor service.
          
          
          </p>
        </div>`;
  } else if (id == "ray") {
    ownerText.innerHTML = `<i class="fa-solid fa-arrow-left back" onclick="returnText()"></i>
    <div class="about-us__title">Ray Mickens</div>
        <div class="about-us__subtitle">
          <p>
          <span class="role">Vice President</span><br><br>in charge of business development, financial oversight, and marketing.  

          He holds a Bachelor Business Administration and has over 10 years managing, owning, and consulting in the food and beverage industry in the airport community.
          
          
          </p>
        </div>`;
  }
}

function returnText() {
  let ownerText = document.getElementById("owner-text");

  ownerText.innerHTML = `<div class="about-us__title">Who are we?</div>
    <div class="about-us__subtitle">
      <p>
        The owners of the company are Mr. Leonard Mickens and Mr. Ray
        Mickens. They are committed and focused on continually improving
        their family way of doing business which emphasizes providing
        quality food and beverage, and retailing experiences in a
        guest-friendly environment. They strive to maintain strong and
        solid relationships with the communities and airport officials
        where they do business. After over 10 years of operating and
        managing airport facilities, M2 concepts' owners have developed a
        top notch reputation for delivering superior customer services and
        strong business relationships. Their dedication and customer
        service oriented motto fit in well with top airport concessions
        programs. M2 Concepts will continue to bring airports the world
        class service they have come to expect from us as premier food,
        beverage, and retail operators. Together they form a team that has
        been successful in winning RFPs, and operational excellence.
      </p>
    </div>`;
}

function scrollPlane() {
    let header = document.getElementById("header");

  var oldScrollY = window.scrollY;
  window.onscroll = function (e) {
    if (oldScrollY < window.scrollY) {
      console.log("Down");
      togglePlaneOff();
    } 
    oldScrollY = window.scrollY;
  };
}
