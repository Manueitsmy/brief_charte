function printText() {
    document.getElementById("staticText").className = "hideText";
    document.getElementById("dynamicText").innerHTML = randomStudent();
    setTimeout(classListener, 3000);
}

function randomStudent() {
    let student = ["Kriss", "Idris", "Manue", "Xavier", "Elodie", "Séverine", "Virand", "Audrey", "Davy", "Martin"];
    return student[getRandomInt(10)];
}

function classListener() {
    if (document.getElementById("staticText").className.match(/(?:^|\s)hideText(?!\S)/)) {
        setTimeout(backInTime, 3000);
    }
}

function backInTime() {
    document.getElementById("staticText").classList.replace( /(?:^|\s)hideText(?!\S)/g , "bob" );
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }