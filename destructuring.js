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

//console.log(poemData.yearFromNet);

const pdafi = poemData.authorFromNet;
const pdyfi = poemData.yearFromNet;

//console.log(pdafi);
//console.log(pdyfi);

//const {yearFromNet, authorFromNet} = poemData
//console.log(yearFromNet);

//csak olyan neve lehet a dest során a változóknak, amilyen kulcsa van az object-nek
function funWithPoemData({yearFromNet, authorFromNet}) {
    console.log(yearFromNet);
    console.log(authorFromNet);
}
//funWithPoemData(poemData)

//Array destructuring
//Nagyon fontos a sorrend
const arr = ["hali", "hello", "salut", function(){
    console.log("bye")
    ;}, "ciao"]

const firstItem = arr[0]
const secondItem = arr[1]

//itt mindegy a változó neve, a sorrend a lényeg
//const [firstItemX, secondItemX] = arr
//console.log(firstItemX === firstItem);

const [firstItemX, , secondItemX, ...elseX] = arr
console.log(elseX);
console.log(secondItemX);
console.log(arr[arr.length-1]);

//Add a function in the array (row 32)
const [,,, ourFun] = arr
ourFun()
