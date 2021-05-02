const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User.model');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const validatePassword = (password) => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    return re.test(String(password));
}

const registerStrategy = new LocalStrategy(
    {
        // usernameField: 'username',
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true,
    },
    async(req, email, password, done) => {
        try {
            // const existingUsername = await User.findOne({username: username});
            
            // if(existingUsername) {
            //     const error = new Error('Existing username');
            //     return done(error)
            // }

            const existingEmail = await User.findOne({email: email});
            
            if(existingEmail) {
                const error = new Error('Existing email');
                return done(error)
            }

            const isValidEmail = validateEmail(email);

            if (!isValidEmail) {
                const error = new Error('Email no válido')
                return done(error)
            }

            const isValidPassword = validatePassword(password);

            if (!isValidPassword) {
                const error = new Error('La contraseña tiene que contener de 6 a 20 carácteres, una mayúscula, una minúscula y un número')
                return done(error)
            }

            const hash = await bcrypt.hash(password, saltRounds);

            const newUser = new User({
                username: req.body.username,
                email: email,
                password: hash
            });

            const savedUser = await newUser.save();

            return done(null, savedUser);
        } 
        catch (error) {
            return done(error)
        }
    }
);

module.exports = registerStrategy;