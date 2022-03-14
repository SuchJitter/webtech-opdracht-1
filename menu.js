// var menuElement = document.getElementById("menubox");
// var paragraph = document.createElement("p");
// var text = document.createTextNode();
// paragraph.appendChild(text);
// menuElement.appendChild(paragraph);

class menu {
    constructor(){
        var menuSectionArray = [];
    }
    createNewMenuSection() {
        return new menuSection();
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
    }
    createNewFood(voedsel) {
        let gerecht = new food(voedsel);
    }
}

var menus = new menu();
var ontbijt = menus.createNewMenuSection();
ontbijt.createNewFood("eieren");
