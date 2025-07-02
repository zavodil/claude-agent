# Claude Artifact Runner

A minimal local environment for running Claude artifacts with your own API key. This project allows you to take artifacts from Claude.ai and run them locally with full `window.claude.complete()` functionality.

## Features

- 🚀 Run Claude artifacts locally
- 🔑 Use your own Anthropic or OpenAI API key
- 🎯 Minimal setup, no unnecessary dependencies
- 📱 Full support for `window.claude.complete()` calls
- ⚡ Hot reloading with Vite
- 🎨 Pre-configured with Tailwind CSS and Lucide React icons

## Quick Start

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd claude-artifact-runner
npm install
```

### 2. Configure API Key

Copy the example environment file and add your API key:

```bash
cp .env.example .env
```

Edit `.env` and add your API key:

```env
# For Anthropic Claude (VITE_ prefix required)
VITE_OPENAI_API_KEY=your_anthropic_api_key_here
VITE_OPENAI_BASE_URL=https://api.anthropic.com
VITE_DEFAULT_MODEL_NAME=claude-3-5-sonnet-20241022

# OR for OpenAI
# VITE_OPENAI_API_KEY=your_openai_api_key_here
# VITE_OPENAI_BASE_URL=https://api.openai.com/v1
# VITE_DEFAULT_MODEL_NAME=gpt-4
```

### 3. Add Your Artifact

Replace the content of `src/artifact.jsx` with your Claude artifact code. The file should export the component as default:

```jsx
import React, { useState } from 'react';
// ... your artifact imports

const YourArtifact = () => {
  // ... your artifact code
  
  // You can use window.claude.complete() just like in Claude.ai
  const handleAICall = async () => {
    const response = await window.claude.complete('Your prompt here');
    console.log(response);
  };

  return (
    // ... your JSX
  );
};

export default YourArtifact;
```

### 4. Run the Development Server

```bash
npm run dev
```

Your artifact will be available at `http://localhost:3000`

## API Configuration

### Anthropic Claude (Default)

```env
VITE_OPENAI_API_KEY=sk-ant-api03-...
VITE_OPENAI_BASE_URL=https://api.anthropic.com
VITE_DEFAULT_MODEL_NAME=claude-3-5-sonnet-20241022
```

### OpenAI

```env
VITE_OPENAI_API_KEY=sk-...
VITE_OPENAI_BASE_URL=https://api.openai.com/v1
VITE_DEFAULT_MODEL_NAME=gpt-4
```

The system automatically detects which API to use based on the `VITE_OPENAI_BASE_URL`.

## How It Works

1. **Environment Setup**: The project uses Vite to inject environment variables into the client
2. **API Integration**: `src/claude-api.js` provides the `window.claude.complete()` function
3. **Artifact Loading**: Your artifact code goes in `src/artifact.jsx`
4. **Styling**: Tailwind CSS and Lucide React icons are pre-configured

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
claude-artifact-runner/
├── src/
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # App entry point
│   ├── index.css        # Global styles with Tailwind
│   ├── claude-api.js    # API integration for window.claude.complete()
│   └── artifact.jsx     # YOUR ARTIFACT GOES HERE
├── .env.example         # Environment variables template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── README.md           # This file
```

## Important Notes

- **API Keys**: Never commit your `.env` file. Your API keys are injected at build time
- **CORS**: This setup works for client-side API calls. Some APIs may require proxy servers for production
- **Artifact Compatibility**: Most Claude artifacts should work out of the box. If you encounter issues, check the browser console for errors

## Troubleshooting

### "API key not configured" error
- Make sure you've created a `.env` file with your API key using `VITE_` prefix
- Restart the dev server after changing environment variables

### "API call failed" error
- Check that your API key is valid and has sufficient credits
- Verify the `VITE_OPENAI_BASE_URL` and `VITE_DEFAULT_MODEL_NAME` are correct for your provider

### Artifact not loading
- Ensure your artifact component is properly exported as default from `src/artifact.jsx`
- Check the browser console for JavaScript errors

## License

MIT License - feel free to use this for your projects!