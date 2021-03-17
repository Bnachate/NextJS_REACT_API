const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true],
        unique: false,
    },
    last_name: {
        type: String,
        required: [true],
        unique: false,
    },
    email: {
        type: String,
        required: [true, 'Please add email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add password'],
        unique: false
    },
    password_confirm: {
        type: String,
        required: [true, 'Please confirm password'],
        unique: false
    },
    favorite_film: {
        type: Array,
        required: [false, ""],
        unique: false
    },
   
})

module.exports = mongoose.models.Users || mongoose.model('Users', UsersSchema);

// soit je récupère la table ou alors je cré le modèle si n'existe pas.
//ce fichier va créer le schéma pour la 1ere fois et ensuite ce fichier ira sur mongoatlass chercher la table(collection)