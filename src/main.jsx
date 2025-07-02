import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { setupClaudeAPI } from './claude-api.js'

// Setup the window.claude.complete function before mounting the app
setupClaudeAPI()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)