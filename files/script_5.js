const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
    ];

// PARTIE 1
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")
livre_qui_pue = 0
books.forEach(books => {
    if (books.rented == 0)
        {console.log("Le livre " + books.title + "n'a jamais été lu par personne parce que c'est un gros navet.")}
    else
        {console.log("Oui, tous les livres ont déjà été empruntés.")}
    })

//PARTIE 2
console.log("Quel est livre le plus emprunté ?")
function sortup( a, b ) {
    if ( a.rented > b.rented ){
      return -1;
    }
    if ( a.rented < b.rented ){
      return 1;
    }
    return 0;
  }
  bestseller = books.sort(sortup)
console.log(bestseller[0])

//PARTIE 3
console.log("Quel est le livre le moins emprunté ?")
function sortdown( a, b ) {
    if ( a.rented < b.rented ){
      return -1;
    }
    if ( a.rented > b.rented ){
      return 1;
    }
    return 0;
  }
  shittybook = books.sort(sortdown)
console.log(shittybook[0])

//PARTIE 4
console.log("Trouve le livre avec l'ID: 873495")
console.log(books.find(book => book.id == 873495));

//PARTIE 5
console.log("Supprime le libre avec l'ID: 133712")
console.log("Bye bye Gatsby")
for (var i = books.length - 1; i >= 0; --i) {
    if (books[i].id == 133712) {
        books.splice(i,1);
    }
  }
console.log("Voila la nouvelle array")
console.log(books)

//PARTIE 6
console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID: 133712 car il est supprimé)")
function compare( a, b ) {
    if ( a.title < b.title ){
      return -1;
    }
    if ( a.title > b.title ){
      return 1;
    }
    return 0;
  }
  bestseller = books.sort(compare)
console.log(bestseller)

