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
    createNewMenuSection(title, propertyArray) {
        return new menuSection(title, propertyArray);
    }
}

class menuSection {
    constructor(titel, propertyArray){
        let title = document.createElement("h1");
        let titleText = document.createTextNode(titel);
        title.appendChild(titleText);
        menuElement.appendChild(title);
        this.tabel = document.createElement("table");
        let tr = document.createElement("tr");
        for (let i = 0; i < propertyArray.length; i++) {
            let property = createTableHeader(propertyArray[i]);
            tr.appendChild(property);
        }
        let aantal = createTableHeader("Aantal");
        tr.appendChild(aantal);
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
        let tableElement = document.createElement("td");
        let aantal = document.createElement("div");
        let plus = document.createElement("button");
        let plusTekst = document.createTextNode("+");
        let totaal = document.createElement("p");
        let totaalTekst = document.createTextNode("0");
        let min = document.createElement("button");
        let minTekst = document.createTextNode("-");
        plus.appendChild(plusTekst);
        totaal.appendChild(totaalTekst);
        min.appendChild(minTekst);
        aantal.appendChild(min);
        aantal.appendChild(totaal);
        aantal.appendChild(plus);
        tableElement.appendChild(aantal);
        master.appendChild(tableElement);
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
let ontbijt = menus.createNewMenuSection("Ontbijt", ["Gerecht", "Vega", "Spicy", "Prijs"]);
ontbijt.createNewFood(["ei", "nee", "1/5", "12,95"])
