const mongoose = require('mongoose');
const {DB_URL, DB_CONFIG} = require('../db')
const User = require('../models/User.model');
const bcrypt = require('bcrypt')

const saltRounds = 10;

const password = 'PasswordDelAdmin1';
let admin = {}
const setAdmin = async() => {
    const hash = await bcrypt.hash(password, saltRounds)
    
    admin = {
        username: 'pablopr145',
        email: 'pablopr145@hotmail.es',
        password: hash,
        role: 'admin',
    }

}


mongoose.connect(DB_URL, DB_CONFIG)
    .then(async () => {
        await setAdmin();
        await User.insertMany(admin);
        console.log('Añadido el admin'); 
    })
    .catch(error => {console.log(error)})
    .finally(() => mongoose.disconnect())