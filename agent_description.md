### Agent Name
Claude Artifact Runner

### Summary
A React-based web application designed to run Claude artifacts locally, featuring a built-in "Emoji Charades" game. This agent integrates with external AI services (Anthropic or OpenAI) to dynamically generate quiz questions based on common sayings and idioms, providing an interactive and engaging user experience.

### Functionality
*   **AI-Powered Quiz Generation**: Generates "Emoji Charades" quiz questions by converting common sayings, idioms, or proverbs into emoji representations using a configured AI model.
*   **Flexible AI Integration**: Connects to either Anthropic or OpenAI API services, allowing users to choose their preferred backend for AI model interactions.
*   **Interactive Gameplay**: Provides a user interface for playing the emoji charades game, including features for entering guesses, receiving immediate feedback, displaying hints, and tracking scores, accuracy, and answer streaks.
*   **Localization Support**: Supports multiple languages for game text, adapting to the user's browser locale or a specified application locale.
*   **Artifact Runner Environment**: Mimics the `window.claude.complete()` API, enabling it to run other compatible Claude artifacts that rely on this function for AI model interactions.

### Inputs
*   **User Input (Web UI)**: Text input for answers, button clicks (e.g., "Play", "Submit", "Next question", "Hint", "Reset").
*   **AI API Responses (HTTP)**: JSON responses from Anthropic or OpenAI containing generated quiz questions (saying, emojis, hint).

### Outputs
*   **Web User Interface (HTTP)**: Renders a dynamic web page displaying the game interface, including emoji questions, input fields, scores, feedback messages, and game controls.
*   **AI API Requests (HTTP)**: Sends POST requests to the configured Anthropic or OpenAI API endpoint to generate new quiz questions.

### Environment Variables
*   **`VITE_OPENAI_API_KEY`**: Your API key for authentication with either Anthropic or OpenAI API services. This is required for the AI integration to function.
*   **`VITE_OPENAI_BASE_URL`**: The base URL for the AI API endpoint. Defaults to `https://api.anthropic.com` but can be set to use OpenAI or other compatible endpoints.
*   **`VITE_DEFAULT_MODEL_NAME`**: Specifies the AI model to use for generating content (e.g., `claude-3-5-sonnet-20241022`). This allows customization to use different model versions or providers.