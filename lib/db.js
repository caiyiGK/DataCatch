const MongoClient = require('mongodb').MongoClient;
const MongoConfg  = require('../config');
const MONGODB_NAME = 'plex';

function openDB () {
    // Mongodb 数据库 URL
    let URL = MongoConfg['mongodb'][arguments[0] || MONGODB_NAME];
    return new Promise((resolve, reject) => {
        MongoClient.connect(URL, (err, client) => {
            if (err) reject(err);
            resolve(client);
        })
    })
}

exports = module.exports = openDB;