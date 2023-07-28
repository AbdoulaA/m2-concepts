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
    airports: [ {
      
    }]
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
    name: "Bleu Mediterranean Bar",
    id: 6,
    url: "./assets/blue logo.png",
  },
  {
    name: "Music Row",
    id: 7,
    url: "./assets/music row logo.png",
  },
  {
    name: "Passyunk Steaks",
    id: 8,
    url: "./assets/passyunk logo.png",
  },
  {
    name: "Settebello",
    id: 9,
    url: "./assets/settebello logo.png",
  },
  {
    name: "Tennessee Rickhouse Whiskey Bar",
    id: 10,
    url: "./assets/tennessee bar logo.png",
  },
];

let airportList = [
  {
    name: "DFW",
    id: 0,
    src: "./assets/dfw logo.png",
    glow: "./assets/dfw logo glow.png",
    url: "https://www.dfwairport.com/"

  },

  {
    name: "IAH",
    id: 1,
    src: "./assets/iah logo.png",
    glow: "./assets/iah logo glow.png",
    url: "https://www.fly2houston.com/iah/overview"
  },

  {
    name: "SAT",
    id: 2,
    src: "./assets/sat logo.png",
    glow: "./assets/sat logo glow.png",
    url: "https://flysanantonio.com/"
  },

  {
    name: "MSP",
    id: 3,
    src: "./assets/msp logo.png",
    glow: "./assets/msp logo glow.png",
    url: "https://www.mspairport.com/"
  },

  {
    name: "BNA",
    id: 4,
    src: "./assets/bna logo.png",
    glow: "./assets/bna logo glow.png",
    url: "https://flynashville.com/"
  },

  {
    name: "PHL",
    id: 5,
    src: "./assets/phl logo.png",
    glow: "./assets/phl logo glow.png",
    url: "https://www.phl.org/"
  },

  {
    name: "DCAIAD",
    id: 6,
    src: "./assets/dca iad logo.png",
    glow: "./assets/dca iad logo glow.png",
    url: "https://www.mwaa.com/"
  },

  {
    name: "DEN",
    id: 7,
    src: "./assets/den logo.png",
    glow: "./assets/den logo glow.png",
    url: "https://www.flydenver.com/"
  },

  {
    name: "MCO",
    id: 8,
    src: "./assets/mco logo.png",
    glow: "./assets/mco logo glow.png",
    url: "https://www.orlandoairports.net/"
  },

  {
    name: "LGA",
    id: 9,
    src: "./assets/lga logo.png",
    glow: "./assets/lga logo glow.png",
    url: "https://www.laguardiaairport.com/"
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

let firstLoad = false


function changeAirports() {
  let airports = document.getElementById("header__sign--logos");
  airportsHtml = ``;
  airports.innerHTML = airportsHtml;

  if (firstLoad === true) {
    for (i = 0; i < 5; i++) {
      airportsHtml += `
      <a href="${airportList[i].url}" target="_blank">
                <img
                  src="${airportList[i].src}"
                  alt=""
                  class="${airportList[i].name} header__sign--logo"
                  on
                />
              </a>
      `;
  
      airports.innerHTML = airportsHtml;

      firstLoad = false
    }
  }
  else {
    for (i = 5; i < 10; i++) {
      airportsHtml += `
      <a href="${airportList[i].url}" target="_blank">
                <img
                  src="${airportList[i].src}"
                  alt=""
                  class="${airportList[i].name} header__sign--logo"
                />
              </a>
      `;
  
      
      airports.innerHTML = airportsHtml;
      firstLoad = true

    }
  }

  


}



// function rightAirports() {
//   let airports = document.getElementById("header__sign--logos");
//   airportsHtml = ``;
//   airports.innerHTML = airportsHtml;

//   for (i = 5; i < 10; i++) {
//     airportsHtml += `
//     <a href="${airportList[i].url}" target="_blank">
//               <img
//                 src="${airportList[i].src}"
//                 alt=""
//                 class="${airportList[i].name} header__sign--logo"
//               />
//             </a>
//     `;

    
//     airports.innerHTML = airportsHtml;
//   }
// }
window.onload = function renderAirports() {
  let airports = document.getElementById("header__sign--logos");
  airportsHtml = ``;
  airports.innerHTML = airportsHtml;

  for (i = 0; i < 5; i++) {
    airportsHtml += `
    <a href="${airportList[i].url}" target="_blank">
              <img
                src="${airportList[i].src}"
                alt=""
                class="${airportList[i].name} header__sign--logo"
              />
            </a>
    `;

    
    airports.innerHTML = airportsHtml;
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
            <a href="./form.html#form__container" class= "store__apply--link">
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

