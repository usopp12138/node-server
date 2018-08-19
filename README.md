# 搭建简单服务器（实现一个能处理路由，支持静态目录的 server）

```
var http = require('http');//加载http服务器的模块
var fs = require('fs');//加载fs模块用于读写文件 


http.Server(function(req,res){             //创建服务器监听8080端口

  
    switch(req.url){                  
        case '/getWeather':            //当req.url是/getWeather的时候发送{a:1,b:2}
            res.end(JSON.stringify({a:1,b:2}))
            break;
 
        case '/user/123':               //当req.url是/user/123的时候发送sample下的user
            res.end(fs.readFileSync(__dirname + '/sample/user'))
            break;
 
        default:                        //当不是以上两个路由，可执行sample下的连接，发送对应的内容
            console.log(req.url)
            res.end(fs.readFileSync(__dirname + '/sample' + req.url))
    
    }
}).listen(8080)
console.log('visit http://localhost:8080')
```
