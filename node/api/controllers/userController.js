exports.find = (req, res) => {
    var user = req.body;

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

exports.findAll = (req, res) => {
    global.db.user.find().toArray((error, result) => {
        if (error) {
            reject(res, 'USER_FIND_ERROR');
        } else {
            fulfill(res, result);
        }
    })
}

exports.create = (req, res) => {
    var user = req.body;

    global.db.user.insert(user, (error, result) => {
        if (error) {
            reject(res, 'DB_ERROR');
        } else {
            fulfill(res, result);
        }
    });
}

exports.update = (req, res) => {
    var user = req.body;

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

exports.remove = (req, res) => {
    var user = req.body;

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

var fulfill = (res, result) => {
    res.status(200).json({
        status: "SUCCESS",
        data: result
    });
}

var reject = (res, message) => {
    res.status(500).json({
        status: "ERROR",
        error: message
    });
}