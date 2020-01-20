let clog=console.log;
let cerr=console.error;

let net=require('net');

let client=net.createConnection(1,'127.0.0.1',$=>{
	clog(`连接成功`);
	client.write(`javascript`);
	client.on('data',$=>clog($.toString()));
});
client.on('end',$=>clog('服务器已经关闭'));
