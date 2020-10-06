const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
console.log("hello")
const portAddress = "/dev/tty.usbmodem145401"
const port = new SerialPort(portAddress, { baudRate: 256000 })
const parser = new Readline()

port.pipe(parser)
parser.on('data', line => console.log(`> ${line}`))
//port.write('ROBOT POWER ON\n')
//> ROBOT ONLINE   