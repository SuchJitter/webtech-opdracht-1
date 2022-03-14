var menuElement = document.getElementById("menubox");
// var paragraph = document.createElement("p");
// var text = document.createTextNode();
// paragraph.appendChild(text);
// menuElement.appendChild(paragraph);

function createTableHeader(description) {
    let th = document.createElement("th");
    let text = document.createTextNode(description);
    th.appendChild(text);
    return th;
}

class menu {
    constructor(){

    }
    createNewMenuSection(propertyArray) {
        return new menuSection(propertyArray);
    }
}

class menuSection {
    constructor(propertyArray){
        this.tabel = document.createElement("table");
        let tr = document.createElement("tr");
        for (let i = 0; i < propertyArray.length; i++) {
            let property = createTableHeader(propertyArray[i]);
            tr.appendChild(property);
        }
        this.tabel.appendChild(tr);
        menuElement.appendChild(this.tabel);
    }
    createNewFood(propertyArray) {
        let gerecht = new food(propertyArray);
        this.tabel.appendChild(gerecht);
    }
}

class food {
    constructor(propertyArray){
        var master = document.createElement("tr");
        for (let i = 0; i < propertyArray.length; i++) {
            var property = document.createElement("td");
            var propertyText = document.createTextNode(propertyArray[i]);
            property.appendChild(propertyText);
            master.appendChild(property);
        }
        return master;
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

let menus = new menu();
let voorgerechten = menus.createNewMenuSection(["Gerecht", "Vega", "Spicy", "Prijs"]);
voorgerechten.createNewFood(["ei", "nee", "1/5", 12.95]);
voorgerechten.createNewFood(["tomatensoep","ja","1/5",9.99]);
voorgerechten.createNewFood(["garnalenspies","nee","3/5",13.95]);
voorgerechten.createNewFood(["fetaSalade","ja","2/5",8.99]);
voorgerechten.createNewFood(["Stokbrood","ja","0/5",6.95]);
