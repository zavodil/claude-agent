/**
 * Claude API integration for artifacts
 * This module provides the window.claude.complete() function
 * that artifacts can use to make API calls
 */

// Get configuration from environment variables (with VITE_ prefix)
const API_KEY = import.meta.env.VITE_OPENAI_API_KEY
const BASE_URL = import.meta.env.VITE_OPENAI_BASE_URL || 'https://api.anthropic.com'
const MODEL_NAME = import.meta.env.VITE_DEFAULT_MODEL_NAME || 'claude-3-5-sonnet-20241022'

/**
 * Determines if we're using Anthropic or OpenAI API based on the base URL
 */
const isAnthropicAPI = () => {
  return BASE_URL.includes('anthropic.com')
}

/**
 * Makes an API call to either Anthropic or OpenAI depending on configuration
 * @param {string} prompt - The prompt to send to the API
 * @returns {Promise<string>} - The response from the API
 */
async function makeAPICall(prompt) {
  if (!API_KEY) {
    throw new Error('API key not configured. Please set VITE_OPENAI_API_KEY in your .env file')
  }

  const isAnthropic = isAnthropicAPI()

  // Prepare request based on API provider
  const requestBody = isAnthropic
    ? {
        model: MODEL_NAME,
        max_tokens: 4000,
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ]
      }
    : {
        model: MODEL_NAME,
        max_tokens: 4000,
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ]
      }

  const headers = isAnthropic
    ? {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
        'anthropic-version': '2023-06-01'
      }
    : {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      }

  const endpoint = isAnthropic
    ? `${BASE_URL}/v1/messages`
    : `${BASE_URL}/chat/completions`

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify(requestBody)
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`API call failed: ${response.status} ${response.statusText} - ${errorText}`)
    }

    const data = await response.json()

    // Extract response text based on API provider
    if (isAnthropic) {
      return data.content?.[0]?.text || 'No response received'
    } else {
      return data.choices?.[0]?.message?.content || 'No response received'
    }
  } catch (error) {
    console.error('API call error:', error)
    throw error
  }
}

/**
 * Sets up the window.claude.complete function that artifacts can use
 * This mimics the Claude artifacts environment API
 */
export function setupClaudeAPI() {
  // Create the claude object if it doesn't exist
  if (!window.claude) {
    window.claude = {}
  }

  /**
   * The complete function that artifacts can call
   * @param {string} prompt - The prompt to send to Claude/OpenAI
   * @returns {Promise<string>} - The response from the API
   */
  window.claude.complete = async (prompt) => {
    try {
      console.log('Claude API call:', prompt.substring(0, 100) + '...')
      const response = await makeAPICall(prompt)
      console.log('Claude API response received')
      return response
    } catch (error) {
      console.error('Claude API error:', error)
      throw error
    }
  }

  console.log(`Claude API initialized with ${isAnthropicAPI() ? 'Anthropic' : 'OpenAI'} backend`)
}