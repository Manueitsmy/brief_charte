function printText() {
  document.getElementById("staticText").className = "hideText";
  document.getElementById("dynamicText").innerHTML = randomStudent();
  setTimeout(backInTime, 3000);
}

function randomStudent() {
  let student = [
    "Kriss",
    "Idris",
    "Manue",
    "Xavier",
    "Elodie",
    "Séverine",
    "Virand",
    "Audrey",
    "Davy",
    "Martin",
  ];
  return student[getRandomInt(10)];
}

function backInTime() {
  document.getElementById("staticText").classList.remove("hideText");
  document.getElementById("dynamicText").innerHTML = "";
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
