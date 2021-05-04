const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } else {
        return res.redirect('auth/login')
    }
}

const isAdmin = (req, res, next) => {
    if (req.isAuthenticated()) {
        if (req.user.role === 'admin') {
            return next();
        } else {
            return res.redirect('/')
        }
    } 
    else {
        return res.redirect('auth/login')
    }
}

module.exports = {isAuthenticated, isAdmin}