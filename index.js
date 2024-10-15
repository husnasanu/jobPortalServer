// import json server
const jsonServer = require('json-server')
// create server for MP
const CServer = jsonServer.create()
//create middleware
const middleware = jsonServer.defaults()
//set route for json file
const route = jsonServer.router('db.json')
//to available app in port
const PORT = 3000 || process.env.PORT

CServer.use(middleware)
CServer.use(route)
CServer.listen(PORT,()=>{
    console.log(`Course server started at port ${PORT} and waiting for client request `);

})