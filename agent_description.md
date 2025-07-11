### Name
Claude Artifact Runner

### Description
The Claude Artifact Runner is a React-based web application that hosts an interactive "Emoji Charades" game. This game challenges users to decode common sayings, idioms, or proverbs represented by a sequence of emojis. It leverages AI models (Anthropic or OpenAI) to dynamically generate new quiz questions, providing a fresh and engaging experience with each play. The application is designed to mimic the environment for running Claude artifacts, allowing for custom API integration.

### Key Features
*   **Emoji Charades Game**: A fun and interactive game where users guess sayings from emoji clues.
*   **AI-Powered Question Generation**: Dynamically generates new quiz questions using either Anthropic or OpenAI API, ensuring a varied and challenging experience.
*   **Custom API Integration**: Provides a `window.claude.complete()` function, mimicking the Claude artifacts environment, allowing the application to make AI model calls.
*   **Multilingual Support**: Supports multiple languages for game text, with automatic detection based on browser or explicit locale settings.
*   **Scoring and Feedback System**: Tracks user scores, total questions, accuracy, and provides immediate feedback on guesses, including combo multipliers for correct streaks.
*   **Responsive Web Interface**: Built with React, Tailwind CSS, and Vite for a modern and responsive user experience.

### Inputs
*   **Web User Interface**: Users provide text input for their guesses and interact through button clicks (e.g., "Play", "Submit", "Hint", "Next question", "Reset").

### Outputs
*   **Web User Interface**: Displays emoji clues, game questions, user feedback (correct/incorrect), scores, accuracy, and game state.
*   **External API Calls**: Makes HTTP POST requests to configured Anthropic or OpenAI API endpoints to generate quiz questions.

### Configuration
The application's behavior, particularly its AI integration, can be customized using the following environment variables:
*   **`VITE_OPENAI_API_KEY`**: Your API key for authentication with either Anthropic or OpenAI API services. This is essential for the AI integration to function.
*   **`VITE_OPENAI_BASE_URL`**: The base URL for the AI API endpoint. Defaults to Anthropic API (`https://api.anthropic.com`) but can be changed to use OpenAI or other compatible endpoints.
*   **`VITE_DEFAULT_MODEL_NAME`**: Specifies the AI model to be used for generating questions (e.g., `claude-3-5-sonnet-20241022`). This allows for using different model versions or providers.