var symboles = "0123456789ABCDEF";

function symboleAleatoire() {
    var num = Math.random() * 16;
    var idx = Math.floor(num);
    //idx est un nombre entier
    return symboles[idx];
}
// console.log("symboleAleatoire() = " + symboleAleatoire() );

console.log(couleurAleatoire());

function couleurAleatoire() {
    var couleur = "#";
    for (var i = 0; i < 6; i++) {
        couleur += symboleAleatoire(); //pour ajouter a la fin d'une chaine de caractére
    }
    return couleur;
}

var tab = document.getElementById("tableau");
var nbreLignes = 20;
var nbreColonnes = 30;
tab.onclick = clickCell; //pour dire qu'a chaque fois que je créer une cellule, on ne l'appelle pas sinon elle va etre appelée 600 fois
for (var m = 0; m < nbreLignes; m++) {
    var row = tab.insertRow();
    for (var n = 0; n < nbreColonnes; n++) {
        var cell = row.insertCell();
        // cell.onclick = clickCell; //pour dire qu'a chaque fois que je créer une cellule, on ne l'appelle pas sinon elle va etre appelée 600 fois
    }
}

var cells = tab.getElementsByTagName("td"); //comme elle est en dehors de la fonction elle est globale, donc  accessible de partout

function colorerCellules() {
    //cells est un array qui contient toutes les cellules
    for (i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = couleurAleatoire();
    }
}
colorerCellules();

var userInput = "";

function addUserInput() { //ajouter ce que l'utilisateur a entré
document.getElementById("enterBtn").blur();
    userInput += document.getElementById("userInputText").value; //maintenant on veut que les mot que l'on rentre se suivent les uns les autres alors on rahoute un + au = de userInput = document....
    console.log(userInput);
    for (var i = 0; i < userInput.length; i++) {
        cells[i].innerHTML = userInput[i];
    }
}


function clickCell(e) {
    // alert(e.target); //ca affiche HTMLtableCellElement
    //"e.target" représente la cellule cliquée
    e.target.style.backgroundColor = "white";
}

function clearText() {
    userInput = ""; //pour mettre le userinput a zero sinon lorsque l'on rappuie sur le enter tout ce qu'on a effacé réapparait
    for (i = 0; i < cells.length; i++) {
        cells[i].innerHTML = "";
    }
}

document.onkeypress = function(e) {
    // alert(e.keyCode);//lorsqu'on tape entrer par exemple il affiche le nombre 13, le nbre 13 est associé a la touche entrer, f5 devient 116,etc
    console.log(e.keyCode);
    if (e.keyCode == "13") { //on peut mettre aussi e.key pour voir le nom de la touche et pas le numero de la touche associé
        addUserInput();
      }
        if (e.key == "Backspace") {
            clearText();
      }
}
