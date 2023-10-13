function Accordeon() {
    let list = document.querySelector("li");

    if (list.classList.contains("hideText")) {
        list.className = "showTime";
    }
    else if (list.classList.contains("showTime")) {
        list.className = "hideText";
    }
    else {
        list.className = "hideText";
    }
}