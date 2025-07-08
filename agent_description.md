### Claude Artifact Runner

The Claude Artifact Runner is a web application designed to host and run AI-powered interactive experiences, specifically mimicking the Claude artifacts environment. It features a custom API integration that allows client-side code to interact with large language models.

**Key Features:**
*   **AI Integration:** Provides a `window.claude.complete()` function, enabling artifacts to make API calls to either Anthropic or OpenAI models for generating content.
*   **Emoji Charades Game:** Includes a built-in interactive game where an AI generates emoji-based quiz questions, challenging users to guess common sayings or idioms.
*   **User Interface:** A React-based web interface for playing the game, submitting answers, receiving feedback, and tracking scores and streaks.
*   **Multilingual Support:** The Emoji Charades game supports multiple languages, including English and Spanish, with automatic locale detection.
*   **Configurable AI Backend:** Allows users to switch between Anthropic and OpenAI API services and specify different AI models.

**Inputs:**
*   **Web Interface:** User text input for game answers and button clicks for game actions (e.g., submit, hint, next question).
*   **Environment Variables:** Configuration for AI API access.

**Outputs:**
*   **Web Interface:** Displays game questions (emojis), user feedback, correct answers, scores, and game statistics.
*   **API Calls:** Requests to external AI services (Anthropic or OpenAI) to generate quiz questions.

**Environment Variables:**
*   **`VITE_OPENAI_API_KEY`**: Your API key for authentication with either Anthropic or OpenAI API services. This is required for the AI integration to function.
*   **`VITE_OPENAI_BASE_URL`**: The base URL for the AI API endpoint. It defaults to Anthropic API (`https://api.anthropic.com`) but can be changed to use OpenAI or other compatible endpoints.
*   **`VITE_DEFAULT_MODEL_NAME`**: Specifies which AI model to use (e.g., `claude-3-5-sonnet-20241022`). This can be customized to use different model versions or providers.