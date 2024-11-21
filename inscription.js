function init() {
  // // Fonction pour valider et enregistrer les données dans le localStorage
  // document.getElementById('signup-form').addEventListener('submit', function (e) {
  //     e.preventDefault(); // Empêche l'envoi du formulaire par défaut

  //     // Récupère les valeurs du formulaire
  //     const username = document.getElementById('username').value;
  //     const email = document.getElementById('email').value;
  //     const mdp = document.getElementById('mdp').value;
  //     const mdpVerif = document.getElementById('mdpVerif').value;

  //     // Validation simple : vérifier si le mot de passe et la confirmation sont identiques
  //     if (mdp !== mdpVerif) {
  //       alert('Les mots de passe ne correspondent pas.');
  //       return;
  //     }

  //     // Crée un objet utilisateur
  //     const user = {
  //       username: username,
  //       email: email,
  //       mdp: mdp, // En réalité, le mot de passe ne doit pas être stocké en clair !
  //     };

  //     // Vérifie s'il y a déjà des utilisateurs dans le localStorage
  //     let users = JSON.parse(localStorage.getItem('users')) || [];

  //     // Ajoute le nouvel utilisateur au tableau
  //     users.push(user);

  //     // Sauvegarde les utilisateurs dans le localStorage
  //     localStorage.setItem('users', JSON.stringify(users));

  //     // Affiche un message de succès
  //     alert('Compte créé avec succès !');

  //     // Réinitialise le formulaire
  //     document.getElementById('signup-form').reset();
  //   });

  //   // Fonction d'annulation (vide les champs)
  //   document.getElementById('cancelBtn').addEventListener('click', function () {
  //     document.getElementById('signup-form').reset();
  //   });

  /////////////////////////////////////////////////////////////////////////////////////////////////////////

  //     document.addEventListener('DOMContentLoaded', function() {
  //         const form = document.getElementById('signup-form');
  //         const users = JSON.parse(localStorage.getItem('users')) || [];

  //         form.addEventListener('submit', function(e) {
  //           e.preventDefault();

  //           // Récupération des valeurs
  //           const username = document.getElementById('username').value;
  //           const email = document.getElementById('email').value;
  //           const mdp = document.getElementById('mdp').value;
  //           const confirmmdp = document.getElementById('mdpVerif').value;

  //           let isValid = true;

  //           // Vérification du nom d'utilisateur (au moins 3 caractères)
  //           if (username.length < 3) {
  //             document.getElementById('invalidUsername').textContent = 'Le nom d\ 'utilisateur doit contenir au moins 3 caractères.';
  //             isValid = false;
  //           } else {
  //             document.getElementById('invalidUsername').textContent = '';
  //           }

  //           // Vérification de l'email (email valide)
  //           const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //           if (!emailPattern.test(email)) {
  //             document.getElementById('invalidEmail').textContent = 'Veuillez entrer un email valide.';
  //             isValid = false;
  //           } else if (users.some(user => user.email === email)) {
  //             document.getElementById('invalidEmail').textContent = 'Cet email est déjà utilisé.';
  //             isValid = false;
  //           } else {
  //             document.getElementById('invalidEmail').textContent = '';
  //           }

  //           // Vérification du mot de passe et de sa confirmation
  //           if (mdp !== confirmmdp) {
  //             document.getElementById('invalidMdp').textContent = 'Les mots de passe ne correspondent pas.';
  //             isValid = false;
  //           } else {
  //             // Vérification des conditions pour le mot de passe
  //             const mdpConditions = validatemdp(mdp);
  //             if (!mdpConditions.isValid) {
  //               document.getElementById('mdp-strength').textContent = mdpConditions.message;
  //               isValid = false;
  //             } else {
  //               document.getElementById('invalidMdp').textContent = '';
  //               const mdpStrength = calculatemdpStrength(mdp);
  //               document.getElementById('mdp-strength').textContent = `Force du mot de passe : ${mdpStrength}`;
  //             }
  //           }

  //           // Si tout est valide, on enregistre l'utilisateur
  //           if (isValid) {
  //             users.push({ username, email, mdp });
  //             localStorage.setItem('users', JSON.stringify(users));
  //             alert('Inscription réussie !');
  //             form.reset();
  //           }
  //         });

  //         // Fonction pour valider le mot de passe
  //         function validatemdp(mdp) {
  //           // Condition 1 : au moins 6 caractères
  //           if (mdp.length < 6) {
  //             return { isValid: false, message: 'Le mot de passe doit contenir au moins 6 caractères.' };
  //           }
  //           // Condition 2 : doit contenir au moins un chiffre
  //           if (!/\d/.test(mdp)) {
  //             return { isValid: false, message: 'Le mot de passe doit contenir au moins un chiffre.' };
  //           }
  //           // Condition 3 : doit contenir au moins un symbole
  //           if (!/[\W_]/.test(mdp)) {
  //             return { isValid: false, message: 'Le mot de passe doit contenir au moins un symbole.' };
  //           }
  //           return { isValid: true, message: '' };
  //         }

  //         // Fonction pour calculer la force du mot de passe
  //         function calculatemdpStrength(mdp) {
  //           if (mdp.length < 6) {
  //             return 'Faible';
  //           } else if (mdp.length >= 6 && (/\d/.test(mdp) || /[\W_]/.test(mdp))) {
  //             return 'Moyenne';
  //           } else if (mdp.length >= 9 && /\d/.test(mdp) && /[\W_]/.test(mdp)) {
  //             return 'Forte';
  //           }
  //           return 'Moyenne';
  //         }
  //       });

  /////////////////////////////////////////////////////////////////////////////////////////

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signup-form");
    const users = JSON.parse(localStorage.getItem("users")) || [];

    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Empêche la soumission du formulaire

      // Récupération des valeurs des champs
      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const mdp = document.getElementById("mdp").value;
      const confirmmdp = document.getElementById("mdpVerif").value;

      let isValid = true;

      // Vérification du nom d'utilisateur (au moins 3 caractères)
      if (username.length < 3) {
        document.getElementById("invalidUsername").textContent =
          "Le nom d'utilisateur doit contenir au moins 3 caractères.";
        isValid = false;
      } else {
        document.getElementById("invalidUsername").textContent = ""; // Aucune erreur
      }

      // Vérification de l'email (email valide)
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(email)) {
        document.getElementById("invalidEmail").textContent =
          "Veuillez entrer un email valide.";
        isValid = false;
      } else if (users.some((user) => user.email === email)) {
        document.getElementById("invalidEmail").textContent =
          "Cet email est déjà utilisé.";
        isValid = false;
      } else {
        document.getElementById("invalidEmail").textContent = ""; // Aucune erreur
      }

      // Vérification du mot de passe et de sa confirmation
      if (mdp !== confirmmdp) {
        document.getElementById("invalidMdp").textContent =
          "Les mots de passe ne correspondent pas.";
        isValid = false;
      } else {
        const mdpConditions = validatemdp(mdp);
        if (!mdpConditions.isValid) {
          document.getElementById("invalidMdp").textContent =
            mdpConditions.message;
          isValid = false;
        } else {
          document.getElementById("invalidMdp").textContent = ""; // Aucune erreur
        }
      }

      // Si tout est valide, on enregistre l'utilisateur
      if (isValid) {
        users.push({ username, email, mdp });
        localStorage.setItem("users", JSON.stringify(users)); // Sauvegarde dans localStorage
        alert("Inscription réussie !");
        form.reset(); // Réinitialisation du formulaire
      }
    });

    // Fonction pour valider le mot de passe
    function validatemdp(mdp) {
      // Condition 1 : au moins 6 caractères
      if (mdp.length < 6) {
        return {
          isValid: false,
          message: "Le mot de passe doit contenir au moins 6 caractères.",
        };
      }
      // Condition 2 : doit contenir au moins un chiffre
      if (!/\d/.test(mdp)) {
        return {
          isValid: false,
          message: "Le mot de passe doit contenir au moins un chiffre.",
        };
      }
      // Condition 3 : doit contenir au moins un symbole
      if (!/[\W_]/.test(mdp)) {
        return {
          isValid: false,
          message: "Le mot de passe doit contenir au moins un symbole.",
        };
      }
      return { isValid: true, message: "" };
    }

    // Gestion du bouton "Annuler"
    const cancelButton = document.getElementById("cancel-btn");
    cancelButton.addEventListener("click", function (e) {
      e.preventDefault(); // Empêche la soumission du formulaire
      form.reset(); // Réinitialise le formulaire
      window.location.href = "index.html"; // Redirige vers la page index.html
    });
  });

  /// Fin fonction init ////////////////////
}
