### Name
Claude Artifact Runner

### Description
This agent is a React-based web application designed to run interactive Claude artifacts. It features an engaging emoji charades game where an AI model dynamically generates quiz questions, challenging users to decode emoji clues into common sayings. It serves as a platform for deploying and interacting with AI-powered web applications.

### Key Features
*   **AI-Powered Question Generation:** Dynamically creates unique emoji-based charades questions and hints using an integrated AI model.
*   **Interactive Game Play:** Users guess sayings from emoji clues, receive instant feedback, and track their score, accuracy, and combo streaks.
*   **Customizable AI Backend:** Supports integration with either Anthropic or OpenAI API services for content generation.
*   **Localization:** Provides game text in multiple languages based on user or application locale.
*   **Extensible Artifact Runner:** Serves as a foundational platform for deploying and running other Claude-style interactive web applications.

### Inputs
*   **User Interface (Web Browser):** Text input for user guesses in the emoji charades game.
*   **External API (HTTP):** Configuration details (API key, base URL, model name) for AI service integration.

### Outputs
*   **User Interface (Web Browser):** Displays the interactive emoji charades game, including emoji clues, hints, user feedback, and game statistics.
*   **External API (HTTP):** Sends requests to configured AI API endpoints to generate quiz questions.

### Configuration
The agent's behavior, particularly its AI integration, can be customized using the following environment variables:
*   **`VITE_OPENAI_API_KEY`**: Your API key for authentication with the chosen AI service (Anthropic or OpenAI). This is required for the Claude API integration to function.
*   **`VITE_OPENAI_BASE_URL`**: The base URL for the AI API endpoint. Defaults to Anthropic's API but can be set to OpenAI or other compatible services.
*   **`VITE_DEFAULT_MODEL_NAME`**: Specifies the AI model to be used for question generation. Can be customized to use different model versions or providers.