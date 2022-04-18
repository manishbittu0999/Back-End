const https = require('http');
const port = 8000;

function add(req, res){
    res.end('<h1>Manish Gupta</h1>');
}

var serv = https.createServer(add);

serv.listen(port, function(err){
    if(err){
        console.log('error occured!');
        return;
    }
    else
        console.log('Server running');
});