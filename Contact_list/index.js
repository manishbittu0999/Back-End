// const express = require('express');
// const port = 8000;

// const app = express();

// app.listen(port, function(err){
//     if(err){
//         console.log('Error occured');
//         return;
//     }
//     else{
//         console.log('Server is running through express at : ', port);
//     }
// });


const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res){
    res.render('index', {title : "Contact Lists App"});
});

app.get('/practise', function(req, res){
    res.render('practise', {
        title : "EJS Practise",
        condition : "false"
    });
});

app.listen(port, function(err){
    if(err){
        console.log('error');
        return;
    }
    else{
        console.log('Server Running');
    }
});