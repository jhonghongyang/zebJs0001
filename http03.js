require('http').createServer((rep,res)=>{
    var url_ = 'D:\\SVN\\tempJs\\views\\hello_word.html';
    switch(rep.url){
        case '/':url_ = 'D:\\SVN\\tempJs\\views\\first.html';break;
        case '/music':url_ = 'D:\\SVN\\tempJs\\views\\music.html';break;
        case '/news':url_ = 'D:\\SVN\\tempJs\\views\\news.html';break;
        case '/video':url_ = 'D:\\SVN\\tempJs\\views\\video.html';break;
        default :break;
    }
    res.setHeader('Content-Type','text/html;chartset=utf-8');
    require('fs').readFile(url_,(err,data)=>{
        res.end(data);
    });
}).listen(3000,'127.0.0.1');