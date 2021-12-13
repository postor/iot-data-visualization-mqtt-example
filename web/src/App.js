import { useEffect, useState } from 'react'
import mqtt from 'mqtt'
import './App.css';

function App() {
  let [temprature, setTemprature] = useState('NaN')
  useEffect(() => {
    let client = mqtt.connect(process.env.REACT_APP_MQTT || 'ws://localhost:8000/mqtt')
    client.on('connect', function () {
      console.log('connected')
      client.subscribe('iots/iot1', function (err, granted) {
        if (err) console.log('subscribe failed!', err)
      })
    })
    client.on('message', function (topic, message) {
      setTemprature(message.toString())
    })
    return () => {
      client.end()
    }

  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>{temprature} ℃</h1>
        <p>
          iot data visualization mqtt example
        </p>
        <a
          className="App-link"
          href="https://github.com/postor/iot-data-visualization-mqtt-example"
          target="_blank"
          rel="noopener noreferrer"
        >
          star the github repo
        </a>
      </header>
    </div>
  );
}

export default App;
