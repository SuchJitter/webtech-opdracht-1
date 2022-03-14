// var menuElement = document.getElementById("menubox");
// var paragraph = document.createElement("p");
// var text = document.createTextNode();
// paragraph.appendChild(text);
// menuElement.appendChild(paragraph);

class menu {
    constructor(){
        var menuSectionArray = [];
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

class menuSection {
    constructor(){
        var FoodArray = [];
    }
    createNewFood(voedsel) {
        let gerecht = new food(voedsel);
    }
}

let menusectie = new menuSection();
menusectie.createNewFood("dynamisch gegenereert");