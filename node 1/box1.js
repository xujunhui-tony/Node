
// process.stdin.setEncoding('utf-8');

// process.stdin.on('readable',() => {
// 	var chunk = process.stdin.read();
// 	if (chunk !== null) {
// 		process.stdout.write('data:${chunk}');
// 	}
// });


// 当前命令行中后回车符出现  触发
// process.stdin.on('data',(data)=>{
// 	process.stdout.write(data);
// });




// 控制台登录案例
// var q = '请输入用户名';
// var users = {
// 	'admin':'123',
// 	'user1':'321',
// 	'user2':'213'
// };

// // 输出第一个问题
// process.stdout.write(q+'\n');

// var i = 0;
// var isInputUserName=true;
// var username='';
// // 接收用户输入
// // var res = process.stdin.readline();//用户的操作无状态
// process.stdin.on('data',(input) => {
// 	console.log(i++);
// 	// 要在此处知道到底input是啥?


// 	// input实际上是一个6️流(二进制数组)
// 	// 输入的字符最后肯定是一个回车符
// 	input = input.toString().trim();  //转化成字符串，去掉回车符
// 	// 获取一个键值对集合中所有的键
// 	if (!username) {
// 		if (Object.keys(users).indexOf(input)===-1) {
// 			// 用户名不存在
// 			process.stdout.write('用户名不存在'+'\n');
// 			process.stdout.write(q+'\n');
// 			// isInputUserName='true';
// 			username='';

// 		}else {
// 			// 用户存在
// 			// var pwd = users[input];
// 			// console.log('存在');
// 			process.stdout.write('请输入密码:\n');
// 			// isInputUserName=false;
// 			username=input;

// 		}
// 	} else {  //出入的是密码,此处拿不到上一次的输入，所以拿不到用户名
// 		// console.log(11111);
// 		if (input==users[username]) {
// 			console.log('登录成功');
// 		}else {
// 			process.stdout.write('请输入密码:\n');
// 		}

// 	}
// });






// // console.log('开始执行了');
// console.time('hehe');//代码计时器,从代码开始执行到结束的时间

// //不断的循环阻塞了代码的执行
// setTimeout(()=>{
// 	for (var i = 0; i < 10000000000; i++) {}
// 		console.log('循环完成');
// },0)
// console.timeEnd('hehe');
// // console.log('完成执行了');




// 举例
// console.time('main');

// // 耗费时间(阻塞情况)
// setTimeout(()=>{
// 	var data = get('http://www.baidu.comm/1.jpg');
// 	console.log(data);
// },0);

// console.timeEnd('main');
// console.log('完成执行了');


// console.time('main');

// get('http://www.baidu.com/1.jpg',function(){
// 	// 这相当于一个回调
// });

// console.timeEnd('main');



// 如果函数需要回调，一定是在参数的最后出现
// 错误优先的回调函数
// function getFileAsync(path,callback) {
// 	if (错误) {
// 		callback(new Error('xx错误'));
// 	}else {
// 		callback(null,data);
// 	}
// }




// 判断一个数字是否是偶数
// function isEvenOrOdd(number,callback){
// 	if (typeof number==='number') {
// 		if (number%2) { //奇数
// 			callback(null,'当前传入的是奇数');
// 		} else {
// 			callback(null,'当前传入的是偶数');
// 		}
// 	} else {
// 		callback(new Error('你传入的不是数字'));
// 	}
// }


// // 约定将错误信息作为回调的第一个参数
// isEvenOrOdd(10,(error,data)=>{
// 	if(error) throw error;
// 	console.log(data);
// });
// isEvenOrOdd(11,(error,data)=>{
// 	if(error) throw error;
// 	console.log(data);
// });
// isEvenOrOdd('hello',(error,data)=>{
// 	if(error) throw error;
// 	console.log(data);
// });




var fs = require('fs');//fs代表操作文件的一个库

// 耗费时间
fs.readFile('/Users/hui/Desktop/学习/基础/node/node 1/wenben', 'utf8',(error,data)=>{
	if (error) {
		throw error;
	} else {
		console.log(data);
	}
});





