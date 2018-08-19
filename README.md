# 搭建简单服务器
var http = require('http');//加载http服务器的模块
var fs = require('fs');//加载fs模块用于读写文件 

//创造服务器监听8080端口
http.Server(function(req,res){
  //当req.url是/getWeather的时候发送{a:1,b:2}
    switch(req.url){
        case '/getWeather':
            res.end(JSON.stringify({a:1,b:2}))
            break;
  //当req.url是/user/123的时候发送sample下的user
        case '/user/123':
            res.end(fs.readFileSync(__dirname + '/sample/user'))
            break;
  //当不是以上两个，发送sample的连接
        default:
            console.log(req.url)
            res.end(fs.readFileSync(__dirname + '/sample' + req.url))
    
    }
}).listen(8080)
console.log('visit http://localhost:8080')
