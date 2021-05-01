const express = require("express");
const path = require("path");
const hbs = require("hbs");
// // const session = require("express-session");
const passport = require("passport")

const indexRoutes = require("./routes/index.routes");
const authRoutes = require("./routes/auth.routes");
const countriesRoutes = require("./routes/countries.routes");
const tagsRoutes = require("./routes/tags.routes")
const myAccountRoutes = require("./routes/my-account.routes")

const db = require('./db.js')

// require("./authentication");

const PORT = 3100;

db.connect();

const server = express();

// server.use(passport.initialize);

server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'hbs');

server.use("/", indexRoutes);
server.use("/", countriesRoutes);
server.use("/", tagsRoutes);
server.use("/auth", authRoutes);
server.use("/my-account", myAccountRoutes);

server.use("*", (req, res) => {
    const error = new Error("Ruta no encontrada");
    error.status = 404;
    return res.status(404).json(error.message)
})

server.use((error, req, res, next) => {
    console.log("Error handler", error);
    const errorStatus = error.status || 500;
    const errorMsg = error.message || "Unexpected error";
    return res.render('error-view', {status: errorStatus, message: errorMsg});
});

server.listen(PORT, () => {
    console.log('Servidor en http://localhost:' + PORT)
})