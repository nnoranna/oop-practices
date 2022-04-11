//Object constructor: Miért is használjuk?
//Ez nem lesz jó, mert....
/* function Poem({year, author, title, text}) {
    this.year = year
    this.author = author
    this.title = title
    this.text = text
} */

//Csak olyan nevet lehet használni, amilyen key szerepel az objektumban
//Function-ként adjuk meg
function Poem({yearFromNet, authorFromNet, titleFromNet, textFromNet}) {
    this.year = yearFromNet;
    this.author = authorFromNet;
    this.title = titleFromNet;
    this.text = textFromNet;
    this.makePage = function(){
        console.log(`
            Title: ${this.title}

            ${this.text}

            Author: ${this.author}
            ${this.year}
        `);
    }
}


const poemData = {
    yearFromNet: 1962,
    authorFromNet: "Weörös Sándor",
    titleFromNet: "Énhasadás",
    textFromNet:`
    Utcasarkon várok rám, 
    félórája is van tán. 
    Ám értelmem felragyog, 
    nem jövök mert itt vagyok`
}

//a poemData object értékeit beadjuk
const favouritePoem = new Poem(poemData)
//Utánaolvasni a prototype-oknak!!!!
Poem.prototype.lang = "HUN"

//favouritePoem.favBy = "András Ránki"

//console.log(favouritePoem.__proto__);
//console.log(Poem.prototype);

favouritePoem.makePage();
//itt már a this-re mutat
//console.log(favouritePoem.author);

//console.log(favouritePoem);
//console.log(favouritePoem.favBy);
