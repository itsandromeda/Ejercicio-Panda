/*global document, window*/
var panda = [{
    alt: "Panda playing",
    src: "assets/images/panda-1.jpg"
}, {
    alt: "Silly panda",
    src: "assets/images/panda-2.jpg"
}, {
    alt: "Panda in basket",
    src: "assets/images/panda-3.jpg"
}, {
    alt: "Panda with basket on top",
    src: "assets/images/panda-4.jpg"
}];

var alt = panda.map(function (e) {
    "use strict";
    return e.alt;
});

var source = panda.map(function (e) {
    "use strict";
    return e.src;
});

function print(alt, src, i) {
    "use strict";
    var gallery = document.getElementById("gallery"),
        figure = document.createElement("figure"),
        img = document.createElement("img"),
        span = document.createElement("span"),
        spanText = document.createTextNode("x");

    img.classList.add("item");
    img.classList.add("black-white");
    img.setAttribute("id", "img-" + i);
    img.setAttribute("src", src);
    img.setAttribute("alt", alt);
    span.classList.add("delete");
    span.appendChild(spanText);

    span.addEventListener('click', function (e) {
        var parentSpan = e.target.parentNode;
        parentSpan.parentNode.removeChild(parentSpan);
    });

    figure.appendChild(img);
    figure.appendChild(span);
    gallery.appendChild(figure);
}

window.addEventListener('load', function () {
    "use strict";
    var i;

    for (i = 0; i < panda.length; i += 1) {
        print(alt[i], source[i], i);
    }
});

document.getElementById("extincion").addEventListener("click", function () {
    "use strict";
    document.getElementById("text-a").classList.toggle("hide");
});

document.getElementById("origen").addEventListener("click", function () {
    "use strict";
    document.getElementById("text-b").classList.toggle("hide");
});