const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults({
    bodyParser: false,
    readOnly: true
})

const PORT = process.env.PORT || 5000

server.use(middlewares)
server.use(router)
server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`)
})

