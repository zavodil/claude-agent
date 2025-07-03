# Claude Artifact Runner

A React-based web application that runs Claude artifacts with custom API integration. The application features an interactive emoji charades game where players decode emoji clues to reveal hidden sayings, proverbs, and idioms.

## Main Functions

- **Artifact Execution**: Provides a runtime environment for Claude-generated React artifacts
- **AI Integration**: Seamlessly integrates with Anthropic's Claude API or OpenAI's API for dynamic content generation
- **Emoji Charades Game**: An educational game that challenges players to interpret emoji representations of common sayings
- **Multi-language Support**: Supports multiple languages including English and Spanish
- **Score Tracking**: Maintains player scores, streaks, and accuracy statistics
- **Dynamic Question Generation**: Uses AI to generate unique, randomized quiz questions

## Key Features

- Real-time AI-powered question generation with category and style variations
- Combo multiplier system for consecutive correct answers
- Hint system to help players when stuck
- Responsive design with Tailwind CSS styling
- Docker containerization for easy deployment
- Configurable API backend (supports both Anthropic and OpenAI)

## Inputs

- **User Input**: Text answers entered via web interface (HTTP)
- **API Configuration**: Environment variables for API authentication and model selection
- **User Interactions**: Button clicks and keyboard input through the web UI

## Outputs

- **Web Interface**: Interactive game interface served via HTTP (port 3000 in development, port 80 in production)
- **Game Feedback**: Visual feedback including scores, streaks, and answer validation
- **AI-Generated Content**: Dynamic quiz questions with emoji representations and hints