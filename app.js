let isPlaneVisible = false;
function toggleHeaderOn() {
  let home = document.getElementById("home");

  if (isPlaneVisible) {
    isPlaneVisible = false;
    return home.classList.remove("hide");
  }
  isPlaneVisible = true;
  home.classList += " hide";
  console.log("plane");
}

let isHeaderVisible = false;
function togglePlaneOn() {
  let plane = document.getElementById("plane__container");
  if (isHeaderVisible) {
    isHeaderVisible = false;
    return plane.classList.remove("hide__plane");
  }
  isHeaderVisible = true;
  plane.classList += " hide__plane";
  console.log("header");
}

// let areStoresVisible = false;
// function toggleStoresOn() {
//   let stores = document.getElementById("plane__stores");
//   if (areStoresVisible) {
//     areStoresVisible = false;
//     return stores.classList.remove("hide__stores");
//   }
//   areStoresVisible = true;
//   stores.classList += " hide__stores";
//   console.log("stores");
// }

