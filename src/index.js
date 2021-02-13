import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "./context/context"
import { SpeechProvider } from "@speechly/react-client"

import App from "./App"
import "./index.css"

ReactDOM.render(
  <SpeechProvider appId="e932ed58-d386-4aeb-b553-f6cfe3a44935" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
)
