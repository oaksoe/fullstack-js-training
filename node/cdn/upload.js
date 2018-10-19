var express = require('express');
var multiparty = require('multiparty');
var cors = require('cors');

var multer = require('multer');
var upload = multer({ dest: './files/' });

var app = express();

app.use(cors());

process.on('uncaughtException', function (err) {
    console.log(err);
});

app.get('/', cors(), function(req, res){
    res.json({msg: 'This is CORS-enabled for all origins!'});
});

app.post('/upload', cors(), upload.any(), function(req, res){
    console.log(req.files);

    res.status(200).json({
        status: "SUCCESS",
        files: req.files,
        fileCount: req.files.length
    });
});

app.listen(4000, function(){
    console.log('CORS-enabled web server listening on port 4000');
});