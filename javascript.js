function roll() {
    var number = Math.round((Math.random() * 5) + 1);
    document.querySelector("h1").innerHTML = number;
    if (number === 1)
        document.querySelector("div").innerHTML = '<img src="./1.jpg">';
    else if (number === 2)
        document.querySelector("div").innerHTML = '<img src="./2.jpg">';
    else if (number === 3)
        document.querySelector("div").innerHTML = '<img src="./3.jpg">';
    else if (number === 4)
        document.querySelector("div").innerHTML = '<img src="./4.jpg">';
    else if (number === 5)
        document.querySelector("div").innerHTML = '<img src="./5.jpg">';
    else if (number === 6)
        document.querySelector("div").innerHTML = '<img src="./6.jpg">';
}