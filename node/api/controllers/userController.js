var Promise = require('promise');
var httpHelper = require('../helpers/http');

exports.find = (req, res) => {
    var user = req.body;    

    var dbFind = (fulfill, reject) => {
        global.db.user.findOne({
            email: user.email
        }, (error, user) => {
            if (error) {
                reject(res, 'USER_NOT_FOUND');
            } else {
                if (user) {
                    fulfill(res, user);
                } else {
                    reject(res, 'USER_NOT_FOUND');
                }
            }
        });
    }

    new Promise(dbFind).then((result) => {
        httpHelper.resResult(res, result);
    }, (error) => {
        httpHelper.resResult(res, error);
    });
}

exports.findAll = (req, res) => { 
    var dbFindAll = (fulfill, reject) => {
        global.db.user.find().toArray((error, result) => {
            if (error) {
                reject(res, 'USER_FIND_ERROR');
            } else {
                fulfill(res, result);
            }
        });
    }

    new Promise(dbFindAll).then((result) => {
        httpHelper.resResult(res, result);
    }, (error) => {
        httpHelper.resResult(res, error);
    });
}

exports.create = (req, res) => {
    var user = req.body;
    
    var dbCreate = (fulfill, reject) => {
        global.db.user.insert(user, (error, result) => {
            if (error) {
                reject(res, 'DB_ERROR');
            } else {
                fulfill(res, result);
            }
        });
    }

    new Promise(dbCreate).then((result) => {
        httpHelper.resResult(res, result);
    }, (error) => {
        httpHelper.resResult(res, error);
    });
}

exports.update = (req, res) => {
    var user = req.body;

    var dbUpdate = (fulfill, reject) => {
        global.db.user.update({
            username: user.username
        }, {
            $set: user
        }, (error, result) => {
            if (error) {
                reject(res, 'USER_UPDATE_ERROR');
            } else {
                fulfill(res, result);
            }
        });
    }

    new Promise(dbUpdate).then((result) => {
        httpHelper.resResult(res, result);
    }, (error) => {
        httpHelper.resResult(res, error);
    });
}

exports.updateAll = (req, res) => {
    var users = req.body;

    var dbUpdateEach = (user) => {
        return new Promise((fulfill, reject) => {
            global.db.user.update({
                username: user.username
            }, {
                $set: user
            }, (error, result) => {
                if (error) {
                    reject(res, 'USER_UPDATE_ERROR');
                } else {
                    fulfill(res, result);
                }
            });
        });
    }

    var updates = [];

    for (var i = 0; i < users.length; i++) {
        updates.push(dbUpdateEach(users[i]));
    }

    Promise.all(updates).then((result) => {
        httpHelper.resResult(res, result);
    }, (error) => {
        httpHelper.resResult(res, error);
    });
}

exports.remove = (req, res) => {
    var user = req.body;

    var dbRemove = (fulfill, reject) => {
        global.db.user.remove({
            username: user.username
        }, (error, result) => {
            if (error) {
                reject(res, 'USER_REMOVE_ERROR');
            } else {
                fulfill(res, result);
            }
        });
    }

    new Promise(dbRemove).then((result) => {
        httpHelper.resResult(res, result);
    }, (error) => {
        httpHelper.resResult(res, error);
    });
}
