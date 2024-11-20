function init () {
    // Fonction pour valider et enregistrer les données dans le localStorage
    document.getElementById('signup-form').addEventListener('submit', function (e) {
        e.preventDefault(); // Empêche l'envoi du formulaire par défaut
  
        // Récupère les valeurs du formulaire
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const mdp = document.getElementById('mdp').value;
        const mdpVerif = document.getElementById('mdpVerif').value;
  
        // Validation simple : vérifier si le mot de passe et la confirmation sont identiques
        if (mdp !== mdpVerif) {
          alert('Les mots de passe ne correspondent pas.');
          return;
        }
  
        // Crée un objet utilisateur
        const user = {
          username: username,
          email: email,
          password: mdp, // En réalité, le mot de passe ne doit pas être stocké en clair !
        };
  
        // Vérifie s'il y a déjà des utilisateurs dans le localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];
  
        // Ajoute le nouvel utilisateur au tableau
        users.push(user);
  
        // Sauvegarde les utilisateurs dans le localStorage
        localStorage.setItem('users', JSON.stringify(users));
  
        // Affiche un message de succès
        alert('Compte créé avec succès !');
        
        // Réinitialise le formulaire
        document.getElementById('signup-form').reset();
      });
  
      // Fonction d'annulation (vide les champs)
      document.getElementById('cancelBtn').addEventListener('click', function () {
        document.getElementById('signup-form').reset();
      });
}