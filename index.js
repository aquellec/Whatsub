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
const showLines = document.querySelector(".show-lines");
const header = document.querySelector(".header");
const body = document.querySelector("body");

let stopFocus = null;
const regex = /.*(?<=\(Original\)\n)/gms;
const styleElem = document.head.appendChild(document.createElement("style"));

const line1 = [
  "La Défense",
  "Esplanade de la Défense",
  "Pont de Neuilly",
  "Les Sablons",
  "Porte Maillot",
  "Argentine",
  "Charles de Gaulle - Étoile",
  "George V",
  "Franklin D. Roosevelt",
  "Champs-Élysées - Clemenceau",
  "Concorde",
  "Tuileries",
  "Palais Royal - Musée du Louvre",
  "Louvre - Rivoli",
  "Châtelet",
  "Hôtel de Ville",
  "Saint-Paul",
  "Le Marais",
  "Bastille",
  "Gare de Lyon",
  "Reuilly - Diderot",
  "Nation",
  "Porte de Vincennes",
  "Saint-Mandé",
  "Bérault",
  "Château de Vincennes",
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

const line3 = [
  "Pont de Levallois Bécon",
  "Anatole France",
  "Louise Michel",
  "Porte de Champerret",
  "Pereire",
  "Wagram",
  "Malesherbes",
  "Villiers",
  "Europe",
  "Saint-Lazare",
  "Havre–Caumartin",
  "Opéra",
  "Quatre-Septembre",
  "Bourse",
  "Sentier",
  "Réaumur–Sébastopol",
  "Arts et Métiers",
  "Temple",
  "République",
  "Parmentier",
  "Rue Saint-Maur",
  "Père Lachaise",
  "Gambetta",
  "Porte de Bagnolet",
  "Gallieni",
];
const line4 = [
  "Porte de Clignancourt",
  "Simplon",
  "Marcadet – Poissonniers",
  "Château Rouge",
  "Barbès-Rochechouart",
  "Gare du Nord",
  "Gare de l’Est",
  "Château d’eau",
  "Strasbourg – Saint-Denis",
  "Réaumur – Sébastopol",
  "Etienne Marcel",
  "Les Halles",
  "Châtelet",
  "Cité",
  "Saint-Michel",
  "Odéon",
  "Saint Germain-des-Prés",
  "Saint-Placide",
  "Montparnasse Bienvenüe",
  "Vavin",
  "Raspail",
  "Denfert-Rochereau",
  "Mouton-Duvernet",
  "Alésia",
  "Porte d’Orléans",
  "Mairie de Montrouge",
];
const line5 = [
  "Bobigny – Pablo Picasso",
  "Bobigny Pantin – Raymond Queneau",
  "Eglise de Pantin Hoche",
  "Porte de Pantin",
  "Ourcq",
  "Laumière",
  "Jaurès",
  "Stalingrad",
  "Gare du Nord",
  "Gare de l’Est",
  "Jacques Bonsergent",
  "République",
  "Oberkampf",
  "Richard-Lenoir",
  "Bréguet-Lenoir",
  "Bréguet – Sabin",
  "Bastille",
  "Quai de la râpée",
  "Gare d’Austerlitz",
  "Saint-Marcel",
  "Campo-Formio",
  "Place d’Italie",
];
const line6 = [];
const line7 = [];
const line8 = [];
const line9 = [];
const line10 = [];

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

const line12 = [];
const line13 = [];

let lineWithData = null;

let selectedLine = localStorage.getItem("selectedLine");

if (
  selectedLine &&
  window.location.href ==
    "file:///Users/Amandine/Documents/gobelins/dataviz/lines.html"
) {
  window.location.href = "subway.html";
}

if (selectedLine) {
  showLine(selectedLine);
}

if (
  window.location.href ==
  "file:///Users/Amandine/Documents/gobelins/dataviz/subway.html"
) {
  showLine(selectedLine);
}

function showLine(selectedLine) {
  console.log(selectedLine);

  if (selectedLine === 1) {
    lineWithData = line1.map((subway) => {
      let matchedStation = {};
      SubwayStations.forEach((element) => {
        if (
          element.title === subway &&
          element.categoryName === "Subway station"
        ) {
          matchedStation = element;
        }
      });
      return matchedStation;
    });
  } else if (selectedLine == 2) {
    lineWithData = line2.map((subway) => {
      let matchedStation = {};
      SubwayStations.forEach((element) => {
        if (
          element.title === subway &&
          element.categoryName === "Subway station"
        ) {
          matchedStation = element;
        }
      });
      return matchedStation;
    });
  } else if (selectedLine == 3) {
    lineWithData = line3.map((subway) => {
      let matchedStation = {};
      SubwayStations.forEach((element) => {
        if (
          element.title === subway &&
          element.categoryName === "Subway station"
        ) {
          matchedStation = element;
        }
      });
      return matchedStation;
    });
  } else if (selectedLine == 4) {
    lineWithData = line4.map((subway) => {
      let matchedStation = {};
      SubwayStations.forEach((element) => {
        if (
          element.title === subway &&
          element.categoryName === "Subway station"
        ) {
          matchedStation = element;
        }
      });
      return matchedStation;
    });
  } else if (selectedLine == 5) {
    lineWithData = line5.map((subway) => {
      let matchedStation = {};
      SubwayStations.forEach((element) => {
        if (
          element.title === subway &&
          element.categoryName === "Subway station"
        ) {
          matchedStation = element;
        }
      });
      return matchedStation;
    });
  } else if (selectedLine == 6) {
    lineWithData = line6.map((subway) => {
      let matchedStation = {};
      SubwayStations.forEach((element) => {
        if (
          element.title === subway &&
          element.categoryName === "Subway station"
        ) {
          matchedStation = element;
        }
      });
      return matchedStation;
    });
  } else if (selectedLine == 7) {
    lineWithData = line7.map((subway) => {
      let matchedStation = {};
      SubwayStations.forEach((element) => {
        if (
          element.title === subway &&
          element.categoryName === "Subway station"
        ) {
          matchedStation = element;
        }
      });
      return matchedStation;
    });
  } else if (selectedLine == 8) {
    lineWithData = line8.map((subway) => {
      let matchedStation = {};
      SubwayStations.forEach((element) => {
        if (
          element.title === subway &&
          element.categoryName === "Subway station"
        ) {
          matchedStation = element;
        }
      });
      return matchedStation;
    });
  } else if (selectedLine == 9) {
    lineWithData = line9.map((subway) => {
      let matchedStation = {};
      SubwayStations.forEach((element) => {
        if (
          element.title === subway &&
          element.categoryName === "Subway station"
        ) {
          matchedStation = element;
        }
      });
      return matchedStation;
    });
  } else if (selectedLine == 10) {
    lineWithData = line10.map((subway) => {
      let matchedStation = {};
      SubwayStations.forEach((element) => {
        if (
          element.title === subway &&
          element.categoryName === "Subway station"
        ) {
          matchedStation = element;
        }
      });
      return matchedStation;
    });
  } else if (selectedLine == 11) {
    console.log("ok");
    lineWithData = line11.map((subway) => {
      let matchedStation = {};
      SubwayStations.forEach((element) => {
        if (
          element.title === subway &&
          element.categoryName === "Subway station"
        ) {
          matchedStation = element;
        }
      });
      return matchedStation;
    });
  } else if (selectedLine == 12) {
    lineWithData = line12.map((subway) => {
      let matchedStation = {};
      SubwayStations.forEach((element) => {
        if (
          element.title === subway &&
          element.categoryName === "Subway station"
        ) {
          matchedStation = element;
        }
      });
      return matchedStation;
    });
  } else if (selectedLine == 13) {
    lineWithData = line13.map((subway) => {
      let matchedStation = {};
      SubwayStations.forEach((element) => {
        if (
          element.title === subway &&
          element.categoryName === "Subway station"
        ) {
          matchedStation = element;
        }
      });
      return matchedStation;
    });
  } else {
  }

  body.setAttribute("data-line", `m${selectedLine}`);
}

console.log(lineWithData);

const nbOfStop = lineWithData.length;

let stopNameHtml = lineWithData.map(function (element, index) {
  return `<li class="stop stop-${index}" onclick="changeStyle(${index})"><strong class="stop-name">${element.title}<span class="stop-data">${element.totalScore} <span class="material-symbols-outlined yellow-star">grade</span> • ${element.reviewsCount} avis</span></strong></li>`;
});

line.innerHTML = stopNameHtml.join("\n");

lineName.innerHTML = `<span data-line="m2" class="line-type">M</span><span class="sign-line">${selectedLine}</span> ${
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

function showAllLines() {
  window.localStorage.clear();
  window.location.href = "lines.html";
}

header.classList.add("header-focus");

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
    choose.classList.add("displayNone");
    legend.classList.add("displayNone");
    showLines.classList.add("displayNone");
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
    showLines.classList.remove("displayNone");
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
