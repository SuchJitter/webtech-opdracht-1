function makeTopMenu(){
    
    var options = [];
    var numbering = 1;

    options.push(document.body);
    options.push.apply(options, document.body.getElementsByTagName("BODY"));
    options.push.apply(options, document.body.getElementsByTagName("HEADER"));
    options.push.apply(options, document.body.getElementsByTagName("FOOTER"));
    options.push.apply(options, document.body.getElementsByTagName("ARTICLE"));
    options.push.apply(options, document.body.getElementsByTagName("SECTION"));
    
    options.forEach(addOption);

}

function addOption(Value){
    var menu = document.getElementById("topmenu");
    var numbering = menu.childElementCount + 1;
    var Text = numbering + ". " + Value.nodeName  ;
    Value.id = Text;
    
    var option = document.createElement("option");
    option.appendChild(document.createTextNode(Text));
    option.value= Text;
    menu.appendChild(option);

}

function backGround(){
    
    var menu = document.getElementById("topmenu");
    var element = document.getElementById(menu.options[menu.selectedIndex].value);
    var selectTag = document.getElementById("colormenu")
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    element.style.backgroundColor = listValue;

}

function fontSize(){
    var menu = document.getElementById("topmenu");
    var element = document.getElementById(menu.options[menu.selectedIndex].value);
    var selectTag = document.getElementById("fontmenu")
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    element.style.fontSize = listValue;
}