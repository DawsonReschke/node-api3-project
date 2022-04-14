// require your server and launch it
const server = require('./api/server')

server.listen(9000,()=>{
    console.log('\x1b[32m',`Listening on port:${'\x1b[33m'}9000`,'\x1b[0m')
})