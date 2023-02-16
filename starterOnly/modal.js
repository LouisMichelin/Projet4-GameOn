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

// DOM Elements pour formulaire
const formDataPrenom = document.querySelector("#first");
const formDataNom = document.querySelector("#last");
const formDataEmail = document.querySelector("#email");
const formDataBirthdate = document.querySelector("#birthdate");
const formDataTournois = document.querySelector("#quantity");

//
// Vérification conformité Prénom + Nom
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
formDataEmail.addEventListener("change", function() {
  checkEmail(this);
});

function checkEmail(input) {
  // Définition du RegExp
  let emailRegExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'g');
  // Test du RegExp
  let testEmail = emailRegExp.test(input.value);
  // Résultat conditionnel
  if (testEmail) {
    input.nextElementSibling.innerHTML = "Champ valide.";
    input.nextElementSibling.style.color = "green";
    return true;
  } else {
    input.nextElementSibling.innerHTML = "Champ vide ou email saisie incorrecte.";
    input.nextElementSibling.style.color = "red";
    return false;
  };
}

//
// Vérification conformité Date de naissance
//
formDataBirthdate.addEventListener("change", function() {
  checkBirthdate(this);
});    

function checkBirthdate(input) {
  // Définition du RegExp
  let birthdateRegExp = new RegExp(
    '^(19|20)[0-9]{2}[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$'// type=date est en yyyy-mm-jj !
  );

  // Test du RegExp
  let testBirthdate = birthdateRegExp.test(input.value);

  // Vérification année de naissance
  let today = new Date();
  let year = Number(today.getFullYear());
  let yearOfInput = Number(input.value.substring(0,4));
  // Vérification mois de naissance
  // let month = Number(today.getMonth()) + 1;
  // let monthOfInput = Number(input.value.substring(5,7));
  // Vérification jour de naissance
  // let day = Number(today.getDate());
  // let dayOfInput = Number(input.value.substring(8,10));

  // Résultat conditionnel
  if (testBirthdate && year > yearOfInput) {
    input.nextElementSibling.innerHTML = "Champ valide.";
    input.nextElementSibling.style.color = "green";
    return true;
  } else if (testBirthdate || !testBirthdate && yearOfInput >= year) {
    input.nextElementSibling.innerHTML = "Vous ne pouvez pas être né(e) demain!";
    input.nextElementSibling.style.color = "red";
    return false;
  } else if (!testBirthdate) {
    input.nextElementSibling.innerHTML = "Veuillez saisir votre date de naissance.";
    input.nextElementSibling.style.color = "red";
    return false;
  }
}

//
// Vérification conformité Nombre de tournois GameOn
//
formDataTournois.addEventListener("change", function() {
  checkTournois(this);
});

function checkTournois(input) {
  // Définition du RegExp
  let tournoisRegExp = new RegExp('^[0-9]{1,2}$');

  // Test du RegExp
  let testTournois = tournoisRegExp.test(input.value);

  //Résultat conditionnel
  if (testTournois) {
    input.nextElementSibling.innerHTML = "Champ valide.";
    input.nextElementSibling.style.color = "green";
    return true;
  } else {
    input.nextElementSibling.innerHTML = "Veuillez saisir un nombre compris entre 0 et 99";
    input.nextElementSibling.style.color = "red";
    return false;
  }
}

//
// Vérification d'au moins 1 Location cochée
//
const formDataLocations = document.querySelectorAll('input[name="location"]');

// Déclencheur de la fonction checkLocations
formDataLocations.forEach(function(e) {
  e.addEventListener("click", function() {
    checkLocations2();
  });
});

// checkLocations1
function checkLocations() {
  if (formDataLocations) {
    console.log("Une case est bien cochée.");
    return true;
  }
}
// checkLocations2
function checkLocations2() {
  for (let location of formDataLocations) {
    if (location.checked) {
      console.log("c'est bon, c'est coché pour de vrai!!!!!!!!!!!!!!!");
      return true;
    }
  }
}

//
// Vérification CGU Conditions d'Utilisateurs = COCHEE (car pas cochée par défaut)
//




//----------------------------------------------------------------------------------------------
//
// Bouton SUBMIT - Si toutes les conditions sont réunies
//
function validate() {
}
///////////////////////////////////////////////////////////////////////

const btn = document.querySelector(".btn-submit");

btn.addEventListener("click", function(e) {
  e.preventDefault();



  if (formDataLocations) {
    alert("merci pour votre inscription!");
  } else {
    alert("veuillez cocher une case svppppp");
  }

});


//document.getElementById("inscription").addEventListener("submit", function(e) {
//  e.preventDefault();
//});

// if(validName && validEmail && ) => passer à la div merci pour votre inscription