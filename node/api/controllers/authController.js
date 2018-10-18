var Promise = require('promise');
var httpHelper = require('../helpers/http');

exports.login = (req, res) => {
    var user = req.body;
    
    var dbLogin = (fulfill, reject) => {                        
        global.db.user.findOne({
            email: user.email
        }, (error, foundUser) => {
            if (error) {
                reject(error);
            } else {
                if (!foundUser) {
                    reject("Email is invalid.");
                } else {
                    if (user.password !== foundUser.password) {
                        reject("Password is invalid.");
                    } else {
                        fulfill(foundUser);
                    }
                }
            }
        });
    }

    new Promise(dbLogin).then((result) => {
        httpHelper.resResult(res, result);
    }, (error) => {
        httpHelper.resResult(res, error);
    });    
}

exports.signup = (req, res) => {
    var user = req.body;

    var dbSignup = (fulfill, reject) => {
        global.db.user.insert(user, (error, result) => {
            if (error) {
                reject("Error while signingup. Details: DB Error.");
            } else {
                fulfill(result);
            }
        });    
    }

    new Promise(dbSignup).then((result) => {
        httpHelper.resResult(res, result);
    }, (error) => {
        httpHelper.resResult(res, error);
    });
}