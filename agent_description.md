# Claude Artifact Runner

A React-based web application that runs Claude artifacts with custom API integration, featuring an interactive emoji charades game powered by AI.

## Overview

This agent provides a local development and deployment environment for Claude artifacts. It includes a built-in example game where players decode emoji representations of common sayings, idioms, and proverbs. The application uses AI (Claude or OpenAI) to dynamically generate quiz questions, making each game session unique and engaging.

## Main Functions

- **Artifact Hosting**: Provides a React-based environment to run Claude artifacts locally
- **AI Integration**: Seamlessly connects to Anthropic Claude or OpenAI APIs for dynamic content generation
- **Emoji Charades Game**: 
  - Converts common sayings and idioms into emoji puzzles
  - Tracks player score, accuracy, and combo multipliers
  - Provides hints and immediate feedback
  - Supports multiple languages with built-in translations
- **Development Server**: Includes hot-reload development environment using Vite
- **Production Deployment**: Docker-ready with nginx for serving the built application

## Key Features

- **Dynamic Question Generation**: Uses AI to create unique emoji puzzles in real-time
- **Multi-language Support**: Includes translations for multiple locales
- **Score Tracking**: Maintains player statistics including accuracy percentage and combo streaks
- **Responsive Design**: Built with Tailwind CSS for optimal display across devices
- **API Flexibility**: Can switch between Anthropic and OpenAI endpoints via configuration

## Inputs

- **HTTP**: Web interface accessible via browser on port 3000
- **User Input**: Text answers entered through the game interface
- **Environment Variables**: Configuration provided at runtime

## Outputs

- **HTTP**: Interactive web application with game interface
- **Visual Feedback**: Real-time score updates, emoji puzzles, and game statistics
- **API Responses**: AI-generated quiz questions displayed in the game

## Configuration Requirements

The application requires the following environment variables to be set:

- `VITE_OPENAI_API_KEY`: API key for Anthropic or OpenAI services
- `VITE_OPENAI_BASE_URL`: API endpoint URL (defaults to Anthropic)
- `VITE_DEFAULT_MODEL_NAME`: AI model to use for content generation