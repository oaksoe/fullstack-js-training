var mongoClient = require('mongodb').MongoClient;
var appConfig = require("./../config/config.json");

var mongodbUrl = "mongodb://" + appConfig.mongo.host + ":" + appConfig.mongo.port + "/" + appConfig.mongo.dbFSTraining;

exports.connect = (cb) => {
    mongoClient.connect(mongodbUrl, function (err, database) {                    
        if(err) throw err;

        setCollections(database.db(appConfig.mongo.dbFSTraining));
        cb();
    });
}

function setCollections(db) {
    global.db = {
        user: db.collection('user')
    };
}
