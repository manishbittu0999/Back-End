const http = require('http');
const fs = require('fs');
var nStatic = require('node-static');

var fileServer = new nStatic.Server('./public');


function serverResponse(req, res){
    console.log(req.url);

    res.writeHead(200, {'content-type':'text/html'});
    //res.end("<h1>Manish Gupta</h1>");

    fs.readFile('./index.html', function(err, data){
        if(err){
            console.log(err);
            return res.end('<h1>Error occured!</h1>');
        }

        return res.end(data);
    });
}


const app = http.createServer(serverResponse);

app.listen(5000, function(err){
    if(err){
        console.error('Error Occurrd!');
        return;
    }
    else{
        console.log('Serving is running fine!');
    }
})