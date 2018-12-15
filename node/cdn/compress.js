var express = require('express');
var multiparty = require('multiparty');
var path = require('path');
var request = require('request');
var fs = require('fs');
var compression = require('compressing');
var config = require('./config/config.json');

var app = express();
app.use('/static', express.static('static'));

app.get('/', function (req, res) {
    res.redirect('static/index.html');
});

app.post('/v1/fstraining/cdn/upload', function(req, res, next) {
    var form = new multiparty.Form();

    form.parse(req, function(err, fields, files) {
        console.log(files);
        res.status(200).json({
            status: "SUCCESS",
            fileCount: files.length
        });
    });

    form.on('file', function(name, file) {
        var fileBuffer = fs.createReadStream(file.path);
        var compressedFilePath = path.dirname(file.path) + '/' + file.originalFilename + '.gz';

        console.log(fileBuffer);
        console.log(compressedFilePath);

        compression.gzip.compressFile(fileBuffer, compressedFilePath)
            .then(function() {
                console.log('Compression Successful!');
                var formData = {
                    file: {
                        value:  fs.createReadStream(compressedFilePath),
                        options: {
                            filename: file.originalFilename
                        }
                    }
                };

                // Post the file to the upload server
                request.post({url: 'http://localhost:4000/upload', formData: formData});
                console.log(compressedFilePath);
            })
            .catch(function(error) {
                console.log('Compression Error: ', error);
            });
    });
});

var server = app.listen(8000, 'localhost' , function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('file compression server listening at ' + host + ':' + port);
});

process.on('uncaughtException', function (err) {
    console.log(err);
});