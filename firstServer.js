const serv = require('http');
const fs = require('fs');
const port = 9000;

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

const net = serv.createServer(serverResponse);
net.listen(port, function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log('Server is running at port : ', port);
    }
});