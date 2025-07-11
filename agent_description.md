### Agent Name
Claude Artifact Runner

### Description
The Claude Artifact Runner is a web-based application designed to host and run interactive AI-driven experiences, referred to as "Claude artifacts." It includes a built-in custom API integration that allows these artifacts to communicate with large language models such as Anthropic Claude or OpenAI. The agent showcases its capabilities through an engaging "Emoji Charades" game, where an AI model dynamically generates quiz questions based on common sayings and proverbs, which users then attempt to decipher from emoji clues.

### Key Features
*   **AI Integration:** Connects to Anthropic or OpenAI APIs to generate dynamic content.
*   **Interactive Game:** Features an "Emoji Charades" game where AI creates unique quiz questions.
*   **Custom API:** Provides a `window.claude.complete()` function for artifacts to make AI calls.
*   **User Interface:** Offers a responsive and intuitive web interface for gameplay.
*   **Scoring System:** Tracks user performance with scores, total questions, accuracy, and combo streaks.
*   **Localization:** Supports multiple languages for game text.

### Inputs
*   **User Interaction (Web UI):** Text input for guesses, button clicks for game actions (e.g., Play, Submit, Hint, Next Question, Reset).

### Outputs
*   **Web User Interface (HTTP):** Renders the game interface, displays emoji questions, user feedback, scores, and game state.
*   **External API Calls (HTTP):** Sends requests to configured AI model endpoints (Anthropic or OpenAI) to generate new quiz questions and hints.

### Environment Variables
*   **`VITE_OPENAI_API_KEY`**: Your API key for authenticating with either Anthropic or OpenAI API services. This is essential for the AI integration to function.
*   **`VITE_OPENAI_BASE_URL`**: The base URL for the AI API endpoint. By default, it points to the Anthropic API, but you can configure it to use OpenAI or other compatible endpoints.
*   **`VITE_DEFAULT_MODEL_NAME`**: Specifies the name of the AI model to be used (e.g., `claude-3-5-sonnet-20241022`). This allows customization for different model versions or providers.