exports.login = (req, res) => {
    var user = req.body;
    console.log("sadfsafsafsfsf", user);
    
    global.db.user.findOne({
        username: user.username
    }, (error, foundUser) => {
        if (error) {
            res.status(500).json({
                status: "ERROR",
                error: error
            });
        } else {
            console.log("hiiiiiiiii whattttttttttt", foundUser);
            if (!foundUser) {
                res.status(500).json({
                    status: "ERROR",
                    error: "Username is invalid."
                });
            } else {
                if (user.password !== foundUser.password) {
                    res.status(500).json({
                        status: "ERROR",
                        error: "Password is invalid."
                    });
                } else {
                    res.status(200).json({
                        status: "SUCCESS",
                        data: foundUser
                    });
                }
            }
        }
    });    
}