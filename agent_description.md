### Name
Claude Artifact Runner

### Description
The Claude Artifact Runner is a web-based application that hosts an interactive "Emoji Charades" game. It dynamically generates quiz questions by converting common sayings or idioms into emoji clues using an integrated AI model (Anthropic or OpenAI). Players decode these emoji clues to guess the hidden sayings, receiving real-time feedback, tracking their score, accuracy, and streak. The application provides a user-friendly interface for an engaging AI-powered guessing game.

### Inputs
*   **User Interface (Web)**: Users provide text guesses for emoji charades questions and interact with game controls such as "Play," "Submit," "Hint," "Next Question," and "Reset."
*   **Environment Variables**:
    *   `VITE_OPENAI_API_KEY`: An API key required for authenticating with either Anthropic or OpenAI API services.
    *   `VITE_OPENAI_BASE_URL`: The base URL for the AI API endpoint, configurable for Anthropic, OpenAI, or other compatible services.
    *   `VITE_DEFAULT_MODEL_NAME`: Specifies the AI model to be used for question generation.

### Outputs
*   **User Interface (Web)**: Displays the emoji quiz questions, user input fields, game statistics (score, total questions, accuracy, combo multiplier), and feedback on answers.
*   **External API Calls (HTTP/S)**: Makes requests to the configured Anthropic or OpenAI API endpoint to generate new emoji charades questions based on predefined prompts.