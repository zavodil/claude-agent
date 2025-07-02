# Claude Artifact Runner

A web application that allows you to run and interact with Claude artifacts locally, featuring a built-in emoji charades game that demonstrates the Claude API integration capabilities.

## Overview

This agent provides a local development environment for testing and running Claude artifacts with custom API integration. It includes a fully functional emoji charades game where players decode emoji clues to reveal hidden sayings, demonstrating real-time AI interaction through the Claude API.

## Main Functions

- **Local Artifact Execution**: Runs Claude artifacts in a React-based web environment
- **API Integration**: Supports both Anthropic Claude and OpenAI API backends for AI-powered interactions
- **Interactive Gaming**: Features an emoji charades game with:
  - Dynamic question generation using AI
  - Multi-language support (English and Spanish)
  - Score tracking and combo multipliers
  - Hint system for challenging questions
  - Streak tracking and accuracy metrics

## Key Features

- **Flexible API Backend**: Automatically detects and switches between Anthropic and OpenAI APIs based on configuration
- **Internationalization**: Built-in support for multiple languages with automatic locale detection
- **Modern UI**: Responsive design with Tailwind CSS styling
- **Real-time Feedback**: Immediate validation of answers with visual feedback
- **Progressive Difficulty**: Tracks used questions to avoid repetition

## Inputs

- **User Input**: Text answers entered via web interface (HTTP/Browser)
- **API Configuration**: Environment variables for API setup
  - `VITE_OPENAI_API_KEY`: API authentication key
  - `VITE_OPENAI_BASE_URL`: API endpoint URL
  - `VITE_DEFAULT_MODEL_NAME`: AI model selection

## Outputs

- **Web Interface**: Interactive game interface served via HTTP (default port 3000)
- **Game Feedback**: Visual and textual responses including:
  - Emoji puzzles and their solutions
  - Score updates and accuracy metrics
  - Hints and answer validation
  - Combo multipliers and streak information

## Usage

The application starts a local web server that automatically opens in your browser. Players can immediately begin playing the emoji charades game, which demonstrates the Claude API integration by generating unique emoji puzzles for common sayings and idioms.