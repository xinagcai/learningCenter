const { log } = require('console');

var fork = require('child_process').fork;
var cpus = require('os').cpus
for(var i = 0;i<cpus.length;i++){
    fork('./worker.js');
}

console.log(__filename);
process.on('message',function(m,server){
    if(m === 'server'){
        server.on('connection',function(socket){
            socket.end('handle by child, pid is '+process.pid+'n');
        })
    }
})
