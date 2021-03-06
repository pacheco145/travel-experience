const express = require('express')
const passport = require('passport');

module.exports = {
    registerGet: (req, res, next) => {
        return res.render('auth/register');
    },
    registerPost: (req, res, next) => {
        const done = (error, user) => {
            if (error) {
                return next(error)
            };
            req.logIn(user, (error) => {
                if (error) {
                    return next(error);
                }
                return res.redirect('/auth/login');
            });
        };
        passport.authenticate('registro', done)(req)
    },
    loginGet: (req, res, next) => {
        return res.render('auth/login');
    },
    loginPost: (req, res, next) => {
        passport.authenticate('acceso', (error, user) => {
            if (error) {
                return next(error)
            }
            req.logIn(user, (error) => {
                if(error) {
                    return next(error);
                }
                return res.redirect('/my-account')
            })
        })(req);
    },
    logoutPost: (req, res, next) => {
        if (req.user) {
            req.logout();

            req.session.destroy(()=>{
                res.clearCookie('Connect.sid');
                return res.redirect('/')
            })
        }

        else {
            return res.status(200).json('No se ha iniciado sesión')
        }
    }
}