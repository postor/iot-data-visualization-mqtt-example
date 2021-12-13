var mqtt = require('mqtt')
var client = mqtt.connect(process.env.MQTT || 'mqtt://localhost')

client.on('connect', function () {
  console.log('connected!')
  setInterval(() => {
    let channel = 'iots/iot1'
    let val = (10 + Math.random() * 10).toFixed(2)
    client.publish(channel, val)

    console.log({ channel, val, time: new Date().toLocaleTimeString() })
  }, 1000)
})