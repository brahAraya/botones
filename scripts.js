var btn = document.getElementsByClassName("btn");
var header = document.getElementById("header");

// efecto aplicado a muchos objetos con múltiples eventos en el mismo listener
for (var i = 0; i < btn.length; i++) {
    "mouseover focus".split(" ").forEach((e) => {
        btn[i].addEventListener(e, function() {
            this.className = "btn btn-mouseover";
        });
    });

    "mouseout blur".split(" ").forEach((e) => {
        btn[i].addEventListener(e, function() {
            this.className = "btn btn-mouseout";
        });
    });
}

// efecto aplicado a un solo objeto con eventlistener normal
header.addEventListener("mouseover", function() {
    this.className = "header-mouseover";
});

header.addEventListener("mouseout", function() {
    this.className = "header-mouseout";
});