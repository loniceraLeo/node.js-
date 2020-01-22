'uses strict'
//let buf=require('buffer').Buffer;
const clog=console.log;
const cerr=console.error;
//const path=require('path');
var MAX_LENGTH=0xFFFFF;
const net=require('net');
const http=require('http');
const {URL}=require('url');
const {Socket}=net;	//{readable,writable,allowHalfOpen} Constructor
const fs=require('fs');	//allowHalfOpen不会在通信结束后向另一端发送fin包

let socket=new Socket({readable:true,writable:true,allowHalfOpen:true})

let server=net.createServer(socket=>{
	server.close();		//close事件只会阻止后续的连接请求，当前连接仍然保留
	socket.on('data',$=>{
		clog(`客户端消息:${$.toString()}`);
		socket.end($=>clog('连接已中断'));
	});
});

server.listen(1000,$=>clog('监听中'));
