// Un prompt s'affiche avec la question suivante
number = prompt("De quel nombre veux-tu calculer la factorielle ?")
// Utilisateur rentre un nombre (par ex 4)
// Dans la console le résultat suivant est affiché


function factorial(num)
  {
      var f = 1;
      for(var i = 1; i <= num; i++)
      {
          f = f* i;
      }
      return(f);
  }

let facto = factorial(number)
console.log("Le résultat est : " + facto)