<<<<<<< Updated upstream
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
=======
var menuElement = document.getElementById("menubox");
var paragraph = document.createElement("p");
var text = document.createTextNode("dynamisch gegenereert");
paragraph.appendChild(text);
menuElement.appendChild(paragraph);


class food {
    constructor(voedsel, naam, prijs, vega){
>>>>>>> Stashed changes
        var menuElement = document.getElementById("menubox");
        var paragraph = document.createElement("p");
        var text = document.createTextNode(voedsel);
        paragraph.appendChild(text);
<<<<<<< Updated upstream
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
=======
        menuElement.appendChild(paragrap);
        this.naam = naam;
        this.prijs = prijs;
        this.vega = vega;
    }
}

class voorgerecht extends food {
    constructor(naam, prijs, vega){
        super(naam);
        super(prijs);
        super(vega);
    }
}

class hoofgerecht extends food {
    constructor(naam, prijs, vega){
        super(naam);
        super(prijs);
        super(vega);
    }
}

class nagerecht extends food {
    constructor(naam, prijs, vega){
        super(naam);
        super(prijs);
        super(vega);
    }
}

class drinken extends food {
    constructor(naam, prijs, vega, percentage){
        super(naam);
        super(prijs);
        super(vega);
        this.percentage = percentage;
    }
}

class borrelHap extends food {
    constructor(naam, prijs, vega, hoeveelheid){
        super(naam);
        super(prijs);
        super(vega);
        this.hoeveelheid = hoeveelheid;
    }
}
>>>>>>> Stashed changes
