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
    createNewMenuSection() {
        return new menuSection();
    }
}

class menuSection {
    constructor(){
        var tabel = document.createElement("table");
        let tr = document.createElement("tr");
        let gerecht = createTableHeader("gerecht");
        let vegetarisch = createTableHeader("Vega");
        let spicy = createTableHeader("Spicy");
        let prijs = createTableHeader("Prijs");
        tabel.appendChild(tr);
        tr.appendChild(gerecht);
        tr.appendChild(vegetarisch);
        tr.appendChild(spicy);
        tr.appendChild(prijs);
        menuElement.appendChild(tabel);
    }
    createNewFood(voedsel) {
        let gerecht = new food(voedsel);
        tabel.appendChild(gerecht);
    }
}

class food {
    constructor(naam, prijs, vega){
        this.naam = naam;
        this.prijs = prijs;
        this.vega = vega;
        var master = document.createElement("tr");
        var naam = document.createElement("td");
        var prijs = document.createElement("td");
        var vega = document.createElement("td");
        var naamText = document.createTextNode(naam);
        var prijsText = document.createTextNode(prijs);
        var vegaText = document.createTextNode(vega);
        naam.appendChild(naamText);
        prijs.appendChild(prijsText);
        vega.appendChild(vegaText);
        master.appendChild(naam);
        master.appendChild(vega);
        master.appendChild(prijs);
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
let menusectie = menus.createNewMenuSection();
menusectie.createNewFood("ei", "yes", 123)