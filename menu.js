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
    createNewFood(naam, vega, spicy, prijs) {
        let gerecht = new food(naam, vega, spicy, prijs);
        this.tabel.appendChild(gerecht);
    }
}

class food {
    constructor(naam, vega, spicy, prijs){
        this.naam = naam;
        this.vega = vega;
        this.spicy = spicy;
        this.prijs = prijs;
        var master = document.createElement("tr");
        var naamTd = document.createElement("td");
        var vegaTd = document.createElement("td");
        var spicyTd = document.createElement("td");
        var prijsTd = document.createElement("td");
        var naamText = document.createTextNode(naam);
        var vegaText = document.createTextNode(vega);
        var spicyText = document.createTextNode(spicy);
        var prijsText = document.createTextNode(prijs);
        naamTd.appendChild(naamText);
        vegaTd.appendChild(vegaText);
        spicyTd.appendChild(spicyText);
        prijsTd.appendChild(prijsText);
        master.appendChild(naamTd);
        master.appendChild(vegaTd);
        master.appendChild(spicyTd);
        master.appendChild(prijsTd);
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
let menusectie = menus.createNewMenuSection(["Gerecht", "Vega", "Spicy", "Prijs"]);
menusectie.createNewFood("ei", "nee", "1/5", "12,95")