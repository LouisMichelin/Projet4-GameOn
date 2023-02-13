function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//
// #1 Fermer la modale
//

// DOM Element pour fermeture de la modale
const closeBtn = document.querySelectorAll(".close");

// Close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

//
// #2 Implémenter les entrées du formulaire
//

// Le formulaire doit être valide quand l'utilisateur clique sur "Submit"
// Les données doivent être saisies correctement :
//  (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
//  (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
//  (3) L'adresse électronique est valide.
//  (4) Pour le nombre de concours, une valeur numérique est saisie.
//  (5) Un bouton radio est sélectionné.
//  (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
// Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.

// DOM Elements pour formulaire
const formDataPrenom = document.querySelector("#first");
const formDataNom = document.querySelector("#last");
const formDataEmail = document.querySelector("#email");
const formDataBirthdate = document.querySelector("#birthdate");
const formDataTournois = document.querySelector("#quantity");
// const formDataLocation =document.querySelector();
// const formDataCheckbox = document.querySelector();


//
// Vérification conformité Prénom + conformité Nom
//
formDataPrenom.addEventListener("change", function() {
  checkName(this);
});

formDataNom.addEventListener("change", function() {
  checkName(this);
});

function checkName(input) {
  // Définition du RegExp
  let nameRegExp = new RegExp('^[A-Za-z-]{2,30}$', 'g');
  // Test du RegExp
  let testName = nameRegExp.test(input.value);
  // Résultat conditionnel
  if (testName) {
    input.nextElementSibling.innerHTML = "Champ valide.";
    input.nextElementSibling.style.color = "green";
    return true;
  } else {
    input.nextElementSibling.innerHTML = "Champ vide ou incorrect.";
    input.nextElementSibling.style.color = "red";
    return false;
  };
}


//
// Vérification conformité Adresse e-mail
//
  // ? REGEX "RFC 5322 official standard": ([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|\[[\t -Z^-~]*])
  // REGEXP DE SARRA /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let emailRegExp = new RegExp(
    '^[A-Za-z0-9.-_]+[@]{1}[A-Za-z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g'
  );

//
// Vérification conformité Date de naissance
//
  // ? REGEX pour date de naissance: /^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/
  // REGEX SARRA , SI BESOIN :  /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
  // Utiliser la NEW DATE !!!!!!!!!!!
  let birthdateRegExp = new RegExp(
    '^[0-9]{1,2}/[0-9]{1,2}/[1-2]{1}[0-9]{3}$', 'g'
  );
  
//
// Vérification conformité Nombre de tournois GameOn
//
  // if else selon valeur saisie
  let tournamentsRegExp = new RegExp(
    '[0-9]{1,3}', 'g'
  );


//----------------------------------------------------------------------------------------------
// let validName= checkFirstname();
// une autre pour firstNAme
// 3ieme pour l'email

// Et à la toute fin : 
  // if(validName && validEmail && ) => passer à la div merci pour votre inscription 