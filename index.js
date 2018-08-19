var http = require('http');
var fs = require('fs');

http.Server(function(req,res){
    switch(req.url){
        case '/getWeather':
            res.end(JSON.stringify({a:1,b:2}))
            break;
        case '/user/123':
            res.end(fs.readFileSync(__dirname + '/sample/user'))
            break;
        default:
            console.log(req.url)
            res.end(fs.readFileSync(__dirname + '/sample' + req.url))
    
    }
}).listen(8080)
console.log('visit http://localhost:8080')