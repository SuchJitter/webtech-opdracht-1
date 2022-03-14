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
        master.appendChild(aantal);
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

let voorgerechten = menus.createNewMenuSection("Voorgerechten",["Gerecht", "Vega", "Spicy", "Prijs"]);
voorgerechten.createNewFood(["ei", "nee", "1/5", 12.95]);
voorgerechten.createNewFood(["tomatensoep","ja","1/5",9.99]);
voorgerechten.createNewFood(["garnalenspies","nee","3/5",13.95]);
voorgerechten.createNewFood(["fetaSalade","ja","2/5",8.99]);
voorgerechten.createNewFood(["Stokbrood","ja","0/5",6.95]);

let hoofdgerechten = menus.createNewMenuSection(["Gerecht","Vega","Spicy","Prijs"]);
hoofdgerechten.createNewFood(["Hamburger","Nee","2/5",13.95]);
hoofdgerechten.createNewFood(["Ceasar Salade","Nee","1/5",8.99]);
hoofdgerechten.createNewFood(["Frietjes","Ja","1/5",4.95]);
hoofdgerechten.createNewFood(["Spicy Kip Burger","4/5",11.95]);
hoofdgerechten.createNewFood(["Schnitzel","Nee","2/5",7.95]);

let nagerechten = menus.createNewMenuSection(["Gerecht","Vega","Prijs"]);
nagerechten.createNewFood(["Dame Blanche","Ja",6.95]);
nagerechten.createNewFood(["Banana Split","Ja",9.95]);
nagerechten.createNewFood(["Sorbet","Ja",5.95]);
nagerechten.createNewFood(["Brownie","Ja",11.95]);
nagerechten.createNewFood(["Cheesecake","Ja",10.95]);

let dranken = menus.createNewMenuSection()