const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/travel-experience';
const DB_CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const connect = () => {
    mongoose.connect(DB_URL, DB_CONFIG)
        .then((res) => {
            const {name, host} = res.connection;
            console.log(`Conectado a ${name} en ${host}`)
        })
        .catch(error => {
            console.log(error)
        })
}

module.exports = {DB_URL, DB_CONFIG, connect}