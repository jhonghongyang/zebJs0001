var server01 = ()=>{
    require('http').createServer(function(req,res){
        res.end('<h1>老子天下第一000</h1>');
    }).listen(3000,'127.0.0.1');
}
server01();