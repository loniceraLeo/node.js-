'use strict'

let clog=console.log;
let cerr=console.error;

let net=require('net');
let http=require('http');

const readline=require('readline');

let {Socket}=net;

const rl=readline.createInterface({
	input:process.stdin,
	output:process.stdout
});

let socket=net.connect(1000,$=>{
	let data='';
	rl.question('myn:',$=>{
		if ($) data=$;
		else throw new Error('no information!');
		socket.write(data);
		rl.close();
	});
});
