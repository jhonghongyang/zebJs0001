require('http').createServer(function(req,res){
    require('fs').readFile("D:\\SVN\\tempJs\\views\\hello_word.html",function(err,data){
       res.end(data);
    });
}).listen(3000,'127.0.0.1');