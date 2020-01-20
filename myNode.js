'uses strict'
//let buf=require('buffer').Buffer;
const clog=console.log;
const cerr=console.error;
//const path=require('path');
const net=require('net');
//const fs=require('fs');
//const Url=require('url');
const EventListener=require('events');

var n=1;

let server=net.createServer(socket=>{
	socket.write('hello\n');
	socket.write(`You are the${n++} visitor!`);
	socket.write(JSON.stringify(socket.address()));
	/*socket.on('end',$=>{
		clog('The connections have been closed');
		server.close();
	});*/
	socket.on('error',$=>{
		if ($) throw $;
	});
	socket.on('readable',$=>{
		let data=socket.read('utf-8');
		if (data!==null) clog(data.toString());
	});
	server.getConnections((e,n)=>{
		if (e) throw e;
		clog(`目前在线人数${n}`);
	});
	setTimeout($=>socket.end(),10000);
});
server.listen(1,'127.0.0.1',_=>{
	clog('successfully connected');
	clog(server.listening);
	clog(server.address());
});