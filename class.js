//Object constrction-t átírni class-ba

/* class Poem {
    constructor(yearFromNet, authorFromNet, titleFromNet, textFromNet) {
        this.year = yearFromNet;
        this.author = authorFromNet;
        this.title = titleFromNet;
        this.text = textFromNet;
    }
} */

//Ez nem fog kelleni
/* const poemData = {
    yearFromNet: 1962,
    authorFromNet: "Weöres Sándor",
    titleFromNet: "Énhasadás",
    textFromNet:`
    Utcasarkon várok rám, 
    félórája is van tán. 
    Ám értelmem felragyog, 
    nem jövök mert itt vagyok`
} */
//Ez nem működik, mert a class nem object, ezt olvasd el: https://www.w3schools.com/js/js_classes.asp
//const favouritePoem = new Poem(poemData)

class Poem {
    constructor(year, author, title, text) {
        this.year = year;
        this.author = author;
        this.title = title;
        this.text = text;
    }
    //ide nem kell a this, mint a prototype-nál, az object constructorban és a function sem
    makePage(){
        console.log(`
            Title: ${this.title}

            ${this.text}
            
            Author: ${this.author}
            ${this.year}
        `);
    }
}


const favouritePoem = new Poem(1962, "Weöres Sándor", "Énhasadás", `
Utcasarkon várok rám, 
félórája is van tán. 
Ám értelmem felragyog, 
nem jövök mert itt vagyok`)
console.log(favouritePoem.author);

favouritePoem.makePage();

//Adunk egy új tulajdonságot=translator; extends és super-nek utánanézni
class ForeignPoem extends Poem {
    constructor(year, author, title, text, translator) {
        super(year, author, title, text)
        this.translator = translator;
    }
    makePage(){
        console.log(`
            Title: ${this.title}

            ${this.text}
            
            Author: ${this.author}
            Translator: ${this.translator}
            ${this.year}
        `);
    }
}

const favouritePoem2 = new ForeignPoem(1962, "Weöres Sándor", "Énhasadás", `
Utcasarkon várok rám, 
félórája is van tán. 
Ám értelmem felragyog, 
nem jövök mert itt vagyok`, "Alan Dickson")

favouritePoem2.makePage();