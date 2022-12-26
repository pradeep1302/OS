function roll() {
    var number = Math.floor(Math.random() * 6) + 1;
    document.querySelector("h1").innerHTML = number;
    document.querySelector("div").innerHTML = "<img src=./" + number + ".jpg>";
}
