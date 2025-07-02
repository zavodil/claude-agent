import React from 'react'
import Artifact from './artifact.jsx'

/**
 * Main App component that renders the Claude artifact
 * The artifact component is imported from ./artifact.jsx
 * You should place your Claude artifact code in that file
 */
function App() {
  return (
    <div className="w-full min-h-screen">
      <Artifact />
    </div>
  )
}

export default App