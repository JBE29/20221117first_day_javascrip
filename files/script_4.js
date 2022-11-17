const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
];
// PARTIE 1
console.log("Les entrepreneurs suivants sont né dans les années 70 :")
entrepreneurs.forEach(entrepreneurs => {
if (1970 >= entrepreneurs.year && entrepreneurs.year < 1980)
    {console.log(entrepreneurs)}
})


//PARTIE 2
console.log("Nom et Prénom des entrepreneurs :")
entrepreneurs.forEach(entrepreneurs => {
    console.log(entrepreneurs.first + " " + entrepreneurs.last ) 
})

//PARTIE 3
console.log("Les ages des entrepreneurs :")
currentyear = "2022"
entrepreneurs.forEach(entrepreneurs => {
    console.log(entrepreneurs.first 
                + " " 
                + entrepreneurs.last 
                + " a (ou aurait s'il est dead) " 
                + (2022 - entrepreneurs.year))
} )

//PARTIE 4
function compare( a, b ) {
    if ( a.last < b.last ){
      return -1;
    }
    if ( a.last > b.last ){
      return 1;
    }
    return 0;
  }
  danslordresvp = entrepreneurs.sort(compare)
console.log(danslordresvp)



/*
function display(array) { for (let i = 0; i < array.length; i++){ console.log(array[i]); } }

console.log("Liste des entrepreneurs qui sont nés dans les années 70\n\n");
let result = (entrepreneurs.filter(entrepreneurs => entrepreneurs.year >= 1970 && entrepreneurs.year < 1980));
display(result);

console.log("\n Array contenant le prénom et le nom des entrepreneurs\n\n");
let names = (entrepreneurs.map(entrepreneurs => `${entrepreneurs.first} ${entrepreneurs.last}`));
display(names);

console.log("\nQuel âge devrait avoir chaque inventeur aujourd'hui ?\n\n");
actual_year = 2022
birth_year = (entrepreneurs.map(entrepreneurs => entrepreneurs.year))
for (i = 0; i < birth_year.length; i++) {
    console.log((names[i] + " devrait avoir ") + (actual_year - birth_year[i]) + " ans.");
}

console.log("\nEntrepreneurs par ordre alphabétique du Nom de famille.\n\n");
entrepreneurs.sort(function (a, b) { return a.last.localeCompare(b.last); })
display(entrepreneurs);
*/