function read01(){
	require('fs').readFile('D:/SVN/tempJs/my.txt',function(err,data){
		alert();
		console.log(data.toString());
	})
}
function test01(){
	var sum = 0;
	for(var i=1;i<101;i++){
		sum = sum + i;
	}
	console.log('1+2+3....+100='+sum);
}
read01();
test01();