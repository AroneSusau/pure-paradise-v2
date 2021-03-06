import {PureParadise} from './PureParadise'
import {Socket} from 'socket.io'

const express = require('express')
const config = require('config')
const app = express()
const http = require('http').createServer(app)
const port = process.env.PORT || 3000
const io = require('socket.io')(http, {
    ...config.get('web')
})

io.on('connect', (socket: Socket) => {
    new PureParadise()
        .connect(socket)
})

http.listen(port, () => {
    console.log(`\x1b[1m\x1b[32m[SUCCESS]\x1b[0m Listening on port ${port}!`)
})
