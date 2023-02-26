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
const btnFermer = document.getElementById("close-inscription");

// Launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Bouton "Fermer" depuis la page de remerciements
btnFermer.addEventListener("click", function() {
  modalbg.style.display = "none";
});

//----------------------------------------------------------------------------------------------
// #1 Fermer la modale
//

// DOM Element
const closeBtn = document.querySelectorAll(".close");

// Close modal event listener
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// Close modal function
function closeModal() {
  modalbg.style.display = "none";
}

//----------------------------------------------------------------------------------------------
// #2 Implémenter les entrées du formulaire
//

// DOM Elements pour formulaire
const formDataPrenom = document.querySelector("#first");
const formDataNom = document.querySelector("#last");
const formDataEmail = document.querySelector("#email");
const formDataBirthdate = document.querySelector("#birthdate");
const formDataTournois = document.querySelector("#quantity");

//----------------------------------------------------------------------------------------------
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

//----------------------------------------------------------------------------------------------
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

//----------------------------------------------------------------------------------------------
// Vérification conformité Date de naissance
//
formDataBirthdate.addEventListener("change", function() {
  checkBirthdate(this);
});    

function checkBirthdate(input) {
  // Définition du RegExp
  let birthdateRegExp = new RegExp(
    '^(19|20)[0-9]{2}[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$'
  );

  // Test du RegExp
  let testBirthdate = birthdateRegExp.test(input.value);

  // Comparaison date naissance VS date aujourd'hui 
  let date1 = new Date(input.value).getTime(); // Naissance
  let date2 = new Date().getTime(); // Aujourd'hui

  // Résultat conditionnel
  if (testBirthdate && (date1 < date2)) {
    input.nextElementSibling.innerHTML = "Champ valide.";
    input.nextElementSibling.style.color = "green";
    return true;
  } else if (date1 > date2) {
    input.nextElementSibling.innerHTML = "Vous ne pouvez pas être né(e) demain!";
    input.nextElementSibling.style.color = "red";
    return false;
  } else if (!testBirthdate) {
    input.nextElementSibling.innerHTML = "Veuillez saisir votre date de naissance.";
    input.nextElementSibling.style.color = "red";
    return false;
  }
}

//----------------------------------------------------------------------------------------------
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
  // Résultat conditionnel
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

//----------------------------------------------------------------------------------------------
// Vérification Location sélectionnée
//
const formDataLocations = document.querySelectorAll('input[name="location"]');

// Déclencheur de la fonction checkLocations
formDataLocations.forEach(function(e) {
  e.addEventListener("click", function() {
    checkLocations();
  });
});

// Vérification d'une Location sélectionnée
function checkLocations() {
  const locationFormErrorMessage = document.querySelector(".erreurLocation");

  // Condition: si toutes les cases sont "null", alors message d'erreur. Sinon, case vide + Display: none.
  if (document.querySelector("input[name='location']:checked") === null) {
    locationFormErrorMessage.textContent = "Veuillez sélectionner une ville.";
    locationFormErrorMessage.style.display= "block";
    return false;
  } else {
    locationFormErrorMessage.textContent = "";
    locationFormErrorMessage.style.display= "none";
    return true;
  }
}

//----------------------------------------------------------------------------------------------
// Vérification CGU sélectionnée
//
const formDataCheckbox = document.getElementById("checkbox1");

formDataCheckbox.addEventListener("click", function() {
  checkCGU();
});

function checkCGU() {
  const checkboxErrorMessage = document.querySelector(".erreurCheckbox");

  // Condition checkbox
  if (formDataCheckbox.checked === false) {
    checkboxErrorMessage.textContent = "Veuillez prendre connaissance des CGU.";
    checkboxErrorMessage.style.display = "block";
    return false;
  } else {
    checkboxErrorMessage.textContent = "";
    checkboxErrorMessage.style.display = "none";
    return true;
  }
}

//----------------------------------------------------------------------------------------------
// Bouton SUBMIT - Si toutes les conditions sont réunies
//
/*
const btn = document.querySelector(".btn-submit");

// Déclencheur final
btn.addEventListener("click", function(e) {
  e.preventDefault();
  sendForm();
});
*/

const form = document.getElementById("inscription");
form.addEventListener("submit", function(e) {
  e.preventDefault();
  sendForm();
} );

function sendForm() {
  // Variables pour éviter rôle du return: true. Permet alors de vérifier TOUS les champs.
  const validName = checkName(formDataPrenom);
  const validLastName = checkName(formDataNom);
  const validEmail = checkEmail(formDataEmail);
  const validBirthday = checkBirthdate(formDataBirthdate);
  const validTournois = checkTournois(formDataTournois);
  const validLocation = checkLocations(formDataLocations);
  const validChecker = checkCGU(formDataCheckbox);

  if (validName && validLastName && validEmail && validBirthday && validTournois && validLocation && validChecker) {
    document.getElementById("inscription").style.display = "none";
    document.getElementById("msg-merci").style.display = "flex";
    document.getElementById("close-inscription").style.display = "block";
    document.getElementById("close-inscription-txt").style.display = "flex";
    console.log(`Voici les données saisies:
    ${formDataPrenom.value},
    ${formDataNom.value},
    ${formDataEmail.value},
    ${formDataTournois.value} tournois,
    et ${document.querySelector("input[name='location']:checked").value}`);
  } else {
    alert("formulaire incomplet");
  }
}