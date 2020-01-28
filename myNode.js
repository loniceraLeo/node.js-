'uses strict'
const clog=console.log;
const cerr=console.error;
const http=require('http');
const net=require('net');

let times=0;
let server=net.createServer({allowHalfOpen:true},socket=>{
	server.close();
	let nickname='default';
	socket.on('data',$=>{
		if (times==0){
			nickname=$.toString();
			clog(`${nickname}进入聊天室`);
			++times;
		}
		else clog(`${nickname}:${$.toString()}`);
	});
});
server.listen(1000,$=>clog('开始监听'))
