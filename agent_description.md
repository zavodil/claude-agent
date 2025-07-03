# Claude Artifact Runner

A React-based web application that runs Claude artifacts with custom API integration. The application features an interactive emoji charades game where players decode emoji clues to reveal hidden sayings, proverbs, and idioms.

## Main Functions

- **Artifact Execution**: Provides a runtime environment for Claude-generated React artifacts
- **API Integration**: Seamlessly integrates with either Anthropic's Claude API or OpenAI's API for AI-powered content generation
- **Emoji Charades Game**: 
  - Generates emoji-based puzzles representing common sayings and idioms
  - Tracks player score, accuracy, and combo streaks
  - Provides hints and feedback for each answer
  - Supports multiple languages with built-in translations
  - Prevents repetition by tracking previously used sayings

## Key Features

- **Multi-language Support**: Currently supports English and Spanish with extensible translation system
- **Dynamic Question Generation**: Uses AI to create unique, contextual emoji puzzles
- **Gamification Elements**: Includes scoring system, combo multipliers, and streak tracking
- **Responsive Design**: Built with Tailwind CSS for optimal display across devices
- **Docker Support**: Includes containerization for easy deployment

## Inputs

- **User Input**: Text answers entered via web interface (HTTP)
- **API Configuration**: Environment variables for API endpoints and authentication
- **Game Controls**: Button clicks and keyboard input (Enter key) via web interface

## Outputs

- **Visual Display**: Emoji puzzles, scores, and game interface rendered in web browser (HTTP)
- **API Responses**: AI-generated quiz questions and hints displayed in the UI
- **Game Feedback**: Real-time scoring, accuracy percentages, and performance metrics

## Configuration Requirements

The application requires API credentials to function properly. It can be configured to work with either Anthropic's Claude API or OpenAI's API by setting the appropriate environment variables.