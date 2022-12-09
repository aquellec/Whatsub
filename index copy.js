const line = document.querySelector(".line");
const lineName = document.querySelector(".line-name");
const sign = document.querySelector(".sign");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const choose = document.querySelector(".choose");
const legend = document.querySelector(".legend");
const topReviewContainer = document.querySelector(".top-review-container");
const card = document.querySelector(".card");
const cardRating = document.querySelector(".card-rating");
const tooltipCardRating = document.querySelector(".tooltip-card-rating");
const allReviews = document.querySelector(".reviews");
const showAll = document.querySelector(".show-all");
const header = document.querySelector(".header");


let selectedLine = null
let stopFocus = null;
const regex = /.*(?<=\(Original\)\n)/gms;
const styleElem = document.head.appendChild(document.createElement("style"));

const line11 = [
  "Châtelet",
  "Hôtel de Ville",
  "Rambuteau",
  "Arts et Métiers",
  "République",
  "Goncourt",
  "Belleville",
  "Pyrénées",
  "Jourdain",
  "Place des Fêtes",
  "Télégraphe",
  "Porte des Lilas",
  "Mairie des Lilas",
];

const line2 = [
  "Porte Dauphine",
  "Victor Hugo",
  "Charles de Gaulle Etoile",
  "Ternes",
  "Courcelles",
  "Monceau",
  "Villiers",
  "Rome",
  "Place de Clichy",
  "Blanche",
  "Pigalle",
  "Anvers",
  "Barbès Rochechouart",
  "La Chapelle",
  "Stalingrad",
  "Jaurès",
  "Colonel Fabien",
  "Belleville",
  "Couronnes",
  "Ménilmontant",
  "Père Lachaise",
  "Philippe Auguste",
  "Alexandre Dumas",
  "Avron",
  "Nation",
];

const lineWithData = line11.map((subway) => {
  let matchedStation = {};
  SubwayStations.forEach((element) => {
    if (element.title === subway && element.categoryName === "Subway station") {
      matchedStation = element;
    }
  });
  return matchedStation;
});

const nbOfStop = lineWithData.length;

let stopNameHtml = lineWithData.map(function (element, index) {
  return `<li class="stop stop-${index}" onclick="changeStyle(${index})"><strong class="stop-name">${element.title}<span class="stop-data">${element.totalScore} <span class="material-symbols-outlined yellow-star">grade</span> • ${element.reviewsCount} avis</span></strong></li>`;
});

line.innerHTML = stopNameHtml.join("\n");

lineName.innerHTML = `<span data-line="m2" class="line-type">M</span><span class="sign-line">11</span> ${
  lineWithData[0].title
} – ${lineWithData[nbOfStop - 1].title}`;

let stopData = document.querySelectorAll(".stop-data");
let stopName = document.querySelectorAll(".stop-name");
let stopStyle = document.querySelectorAll(".stop");

for (let i = 0; i < nbOfStop; i++) {
  styleElem.innerHTML += `.stop-${i}::after {
    width: calc(20px + 20px * ${lineWithData[i].reviewsCount}/100); 
    height: calc(20px + 20px * ${lineWithData[i].reviewsCount}/100); 
    bottom: calc(-0.25rem - (20px + 20px * ${
      lineWithData[i].reviewsCount
    }/100)/2); 
    left: calc(0.25rem - (20px + 20px * ${
      lineWithData[i].reviewsCount
    }/100)/2);
    opacity: calc(1 * (${lineWithData[i].totalScore}/5));
  }
  .stop-${i}::before {
    width: calc(5rem - (20px + 20px * ${
      lineWithData[i + 1] ? lineWithData[i + 1].reviewsCount : 0
    }/100)/2 - (20px + 20px * ${lineWithData[i].reviewsCount}/100)/2); 
    left: calc(0.25rem + (20px + 20px * ${
      lineWithData[i].reviewsCount
    }/100)/2);
  }
  .stopChanged-${i}{
    width: calc(100vw - 1rem) ;
  }
  .stopChanged-${i}::before {
    width: calc(100vw - (20px + 20px * ${
      lineWithData[i + 1] ? lineWithData[i + 1].reviewsCount : 0
    }/100)/2 - (20px + 20px * ${lineWithData[i].reviewsCount}/100)/2);
  }
  `;
}

sign.classList.add("signNotFocus");
line.style.transform = "translate(80px, 0)";

function reviewTooltip(event) {
  const div = document.createElement("div");
  let reviewIndex = event.target.getAttribute("data-index");
  event.target.innerHTML = `
  <div class="tooltip">
    <p class="card-review">"${reviewsSortByRate[reviewIndex].text.replace(
      regex,
      ""
    )}"</p>
    <div class="card-bottom">
      <p class="card-date">${reviewsSortByRate[reviewIndex].publishAt}</p>
      <div class="card-rating tooltip-card-rating">
        <span class="material-symbols-outlined tooltip-material-symbols-outlined">grade</span>
        <span class="material-symbols-outlined tooltip-material-symbols-outlined">grade</span>
        <span class="material-symbols-outlined tooltip-material-symbols-outlined">grade</span>
        <span class="material-symbols-outlined tooltip-material-symbols-outlined">grade</span>
        <span class="material-symbols-outlined tooltip-material-symbols-outlined">grade</span>
      </div>
    </div>
  </div>
  `;

  const stars = document.querySelectorAll(".tooltip-material-symbols-outlined");

  for (let index = 0; index < reviewsSortByRate[reviewIndex].stars; index++) {
    const element = stars[index];
    element.classList.add("yellow-star");
  }
}

function showAllStations() {
  stopFocus = null;
  changeStyle();
}

function changeStyle(stopNumber) {
  stopFocus = stopNumber;
  if (stopFocus != null) {
    document.querySelectorAll(".stop").forEach((el, i) => {
      el.classList.add(`stopChanged-${i}`);
    });
    document.querySelectorAll(".stop-data").forEach((el, i) => {
      el.classList.add("stop-data-focus");
    });
    line.style.marginLeft = `calc(50vw - 35px + 100vw * -${stopFocus})`;
    line.style.transform = "";
    sign.classList.remove("signNotFocus");
    showAll.classList.add("displayBlock");
    arrowLeft.classList.add("displayBlock");
    arrowRight.classList.add("displayBlock");
    topReviewContainer.classList.add("displayFlex");
    header.classList.add("header-focus");
    choose.classList.add("displayNone");
    legend.classList.add("displayNone");
    stopName.forEach((el) => {
      el.classList.add("stop-name-focus");
    });
    stopStyle.forEach((el) => {
      el.classList.add("stop-focus");
    });
    lineName.style.marginBottom = "0";
    line.style.marginTop = "0";
    topReview(stopFocus);
    allReviews.innerHTML = "";
    showAllReviews(stopFocus);
    Array.from(allReviews.children).forEach((review) => {
      review.addEventListener("mouseenter", (event) =>
        reviewTooltip(event, stopFocus)
      );
      review.addEventListener("mouseleave", () => {
        review.innerHTML = "";
      });
    });
    if (stopFocus === 0) {
      arrowLeft.classList.remove("displayBlock");
    } else if (stopFocus == nbOfStop - 1) {
      arrowRight.classList.remove("displayBlock");
    }
  } else {
    arrowLeft.classList.remove("displayBlock");
    arrowRight.classList.remove("displayBlock");
    topReviewContainer.classList.remove("displayFlex");
    line.style.marginTop = "2em";
    lineName.style.marginBottom = "1em";
    legend.classList.remove("displayNone");
    document.querySelectorAll(".stop").forEach((el, i) => {
      el.classList.remove(`stopChanged-${i}`);
    });
    document.querySelectorAll(".stop-data").forEach((el, i) => {
      el.classList.remove("stop-data-focus");
    });
    line.style.marginLeft = `35px`;
    allReviews.innerHTML = "";
    stopName.forEach((el) => {
      el.classList.remove("stop-name-focus");
    });
    stopStyle.forEach((el) => {
      el.classList.remove("stop-focus");
    });
    sign.classList.add("signNotFocus");
    showAll.classList.remove("displayBlock");
    header.classList.remove("header-focus");
    choose.classList.remove("displayNone");
    line.style.transform = "translate(80px, 0)";
  }
}

let reviewsSortByRate = null;

function showAllReviews(stopFocus) {
  reviewsSortByRate = lineWithData[stopFocus].reviews.sort((a, b) => {
    if (a.stars < b.stars) return -1;
    if (a.stars > b.stars) return 1;
    return 0;
  });

  reviewsSortByRate.forEach((el, index) => {
    allReviews.innerHTML += `<div class="review rate-${el.stars}" data-index="${index}"></div>`;
  });
}

function topReview(stopFocus) {
  const topReview = lineWithData[stopFocus].reviews.sort((a, b) => {
    if (a.likesCount > b.likesCount) return -1;
    if (a.likesCount < b.likesCount) return 1;
    return 0;
  })[0];

  card.innerHTML = `
  <p class="card-review">"${topReview.text.replace(regex, "")}"</p>
  <div class="card-bottom">
    <p class="card-date">${topReview.publishAt}</p>
    <div class="card-rating">
      <span class="material-symbols-outlined card-review-material-symbols-outlined">grade</span>
      <span class="material-symbols-outlined card-review-material-symbols-outlined">grade</span>
      <span class="material-symbols-outlined card-review-material-symbols-outlined">grade</span>
      <span class="material-symbols-outlined card-review-material-symbols-outlined">grade</span>
      <span class="material-symbols-outlined card-review-material-symbols-outlined">grade</span>
    </div>
  </div>
  `;

  const stars = document.querySelectorAll(
    ".card-review-material-symbols-outlined"
  );

  for (let index = 0; index < topReview.stars; index++) {
    const element = stars[index];

    element.classList.add("yellow-star");
  }
}

function goRight() {
  stopFocus = stopFocus + 1;
  changeStyle(stopFocus);
}

function goLeft() {
  stopFocus = stopFocus - 1;
  changeStyle(stopFocus);
}
