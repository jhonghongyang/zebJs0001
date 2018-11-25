var fs = require('fs');
var server01 = ()=>{
    require('http').createServer(function(req,res){
        //res.setHeader('Content-Type','text/html;charset=utf-8')
        //res.end('<h1>老子天下第一000'+req.connection.remoteAddress+'</h1>')
        fs.readFile('D:\\SVN\\tempJs\\my.txt',function(err,data){
            console.log(data.toString());
            res.end('<h2>'+data.toString()+'</h2>');
        });
    }).listen(3000,'127.0.0.1');
}
server01();