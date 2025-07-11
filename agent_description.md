### Agent Name
Claude Artifact Runner

### Description
The Claude Artifact Runner is a web-based application designed to host and execute AI-powered interactive experiences, specifically "Claude artifacts." It features a built-in "Emoji Charades" game where users decode emoji clues to guess common sayings. The game leverages AI models (Anthropic or OpenAI) to dynamically generate quiz questions, providing an engaging and interactive user experience.

### Functionality
*   **AI Integration:** Connects to either Anthropic or OpenAI API services to generate content. It exposes a `window.claude.complete()` function, allowing embedded artifacts to make AI calls.
*   **Emoji Charades Game:** Provides a fully functional game where:
    *   AI generates unique emoji-based questions representing common sayings.
    *   Users input their guesses for the sayings.
    *   The game provides immediate feedback on answers (correct, close, or incorrect).
    *   It tracks user scores, total questions, accuracy, and maintains a combo streak.
    *   Offers hints for challenging questions.
*   **User Interface:** Presents a responsive and interactive web interface for playing the game, including start/reset options, input fields, and score displays.

### Inputs
*   **Web Interface (User):** User guesses via text input, button clicks (Play, Submit, Hint, Next Question, Reset).
*   **Environment Variables (Configuration):**
    *   `VITE_OPENAI_API_KEY`: API key for authentication with Anthropic or OpenAI API services.
    *   `VITE_OPENAI_BASE_URL`: Base URL for the AI API endpoint (defaults to Anthropic).
    *   `VITE_DEFAULT_MODEL_NAME`: Specifies the AI model to use for content generation.

### Outputs
*   **Web Interface (Display):** Displays game elements such as emoji questions, user input fields, correct answers, scores, feedback messages, and game statistics.
*   **External API Calls (HTTP):** Sends requests to configured AI API endpoints (Anthropic or OpenAI) to generate quiz questions.