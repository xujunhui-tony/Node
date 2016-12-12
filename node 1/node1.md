# node.js

## node简介

- 什么是javascript?
  + 脚本语言
  + 运行在浏览器中
  + 一般用来做客户端页面的交互
- javascript的运行环境
  + 浏览器

  + 不够严谨

  + 运行在浏览器内核中的js引擎
- 浏览器中的js可以做什么
  + 操作DOM(对DOM的增删改)
  + ajax/跨域
  + BOM对象(页面跳转、历史记录、console.log()、alert)
  + ECMAScript
- 浏览器中的javascript不能做什么
  + 文件操作(文件和文件夹的增删改查)
  + 没有办法操作系统信息
- 编程语言的能力取决于什么
  + 语言本身？语言本身只是提供定义变量，定义函数，定义类型，流程控制，循环结构之类的操作
  + 取决于运行该语言的平台
  + 对于js来说，我们常说的js实际是es，大部分能力都是由浏览器的执行引擎决定
  + BOM和DOM可以说是浏览器开放出来的接口
  + Java既是平台也是语言，java运行再java虚拟机
  + C#语言，平台: .net framework,也可以运行在mono这样的平台
  + PHP既是语言也是平台
- javascript只可以运行再在浏览器中吗？
  + 不是
  + 能运行在哪，取决于这个环境有没有特定的平台

### 什么是node.js

node.js是一个基于Chrome V8引擎的javascript运行环境，node.js使用了一个事件驱动，非阻塞式I/O的模型，使其轻量又高效，node.js的包管理器npm，是全球最大的开源生态系统。

node其实就是javascript语言在服务器端的运行环境
所谓"运行环境"，有两层意思

- js语言通过Node在服务器运行，在这个意义上，node有点像js虚拟机
- node提供大量工具库，使得js语言与操作系统互动(比如读写文件，新建子进程)，在这个意义上，Node又是js的工具库

node是一个javascript的运行环境(平台)，不是一门语言，也不是js框架

### 为什么选择js

js目前是开发行业中最火热的一门语言，会的人很多

根据node.js创始人Ryan Dahl回忆，他最初希望采用Ruby,但是Ruby的虚拟机效率不行；
是node选择了js,不是js发展出来了一个node


###Node命令基本用法
 进入REPL环境

- $ node


执行脚本字符串

- $ node -e 'console.log("hello")'

运行脚本文件

- $ node index.js
- $ node path/index.js
- $node path/index

查看帮助

- $ node —help

  ​


### 全局对象

- global 类似于客户端js运行环境中的window
- process.stdin   输入
- process.stdout输出

登录例子

```javascript
var q = '请输入用户名';
var users = {
	'admin':'123',
	'user1':'321',
	'user2':'213'
};

// 输出第一个问题
process.stdout.write(q+'\n');

var i = 0;
var isInputUserName=true;
var username='';
// 接收用户输入
// var res = process.stdin.readline();//用户的操作无状态
process.stdin.on('data',(input) => {
	console.log(i++);
	// 要在此处知道到底input是啥?
	// input实际上是一个6️流(二进制数组)
	// 输入的字符最后肯定是一个回车符
	input = input.toString().trim();  //转化成字符串，去掉回车符
	// 获取一个键值对集合中所有的键
	if (!username) {
		if (Object.keys(users).indexOf(input)===-1) {
			// 用户名不存在
			process.stdout.write('用户名不存在'+'\n');
			process.stdout.write(q+'\n');
			// isInputUserName='true';
			username='';
		}else {
			// 用户存在
			// var pwd = users[input];
			// console.log('存在');
			process.stdout.write('请输入密码:\n');
			// isInputUserName=false;
			username=input;
		}
	} else {  //出入的是密码,此处拿不到上一次的输入，所以拿不到用户名
		// console.log(11111);
		if (input==users[username]) {
			console.log('登录成功');
		}else {
			process.stdout.write('请输入密码:\n');
		}
	}
});
```



### 什么是异步

1. 现实生活中:
   - 打电话(同步)
   - 发送短信(异步)，不太紧急的事
2. 程序世界中
   - setTimeOut();
   - $.ajax();
   - 文件操作
   - node所有的发生阻塞的操作都是异步的

什么是I/O

- I/O:[input/output]  输入输出

- 可以理解为从输入到输出之间转化的过程

- 例如:

  - 敲击键盘(输入),看到编辑器多出字符(输出)

  - 移动鼠标(输入),看到光标移动(输出)

    ​