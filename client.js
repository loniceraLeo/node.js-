'use strict'
let clog=console.log;
let cerr=console.error;

const http=require('http');
const fs=require('fs');
const readline=require('readline');
const {Socket}=require('net');

let rl=readline.createInterface({
	input:process.stdin,
	output:process.stdout,
	prompt:'=>',
});
let req='';

console.clear();

let socket=new Socket({readable:true,writable:true,allowHalfOpen:true});

rl.prompt();
socket.connect(1000,$=>clog('连接成功'));
rl.on('line',$=>{
	let clientData=$.trim();
	socket.write(clientData);
	rl.prompt();
});
