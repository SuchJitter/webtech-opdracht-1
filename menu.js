var menuElement = document.getElementById("menubox");
var paragraph = document.createElement("p");
var text = document.createTextNode("dynamisch gegenereert");
paragraph.appendChild(text);
menuElement.appendChild(paragraph);

class menu {
    constructor(){
        var menuSectionArray = [];
    }
}

class menuSection {
    constructor(){
        var FoodArray = [];
    }
}

class food {
    constructor(voedsel){
        var menuElement = document.getElementById("menubox");
        var paragraph = document.createElement("p");
        var text = document.createTextNode(voedsel);
        paragraph.appendChild(text);
        menuElement.appendChild(paragraph);
    }
}