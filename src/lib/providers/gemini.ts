import {
  ChatGoogleGenerativeAI,
  GoogleGenerativeAIEmbeddings,
} from '@langchain/google-genai';
import { getGeminiApiKey } from '../../config';
import logger from '../../utils/logger';

export const loadGeminiChatModels = async () => {
  const geminiApiKey = getGeminiApiKey();

  if (!geminiApiKey) return {};

  try {
    const chatModels = {
      'gemini-2.0-flash-thinking-exp': {
        displayName: 'Gemini 2.0 Flash Thinking',
        model: new ChatGoogleGenerativeAI({
          modelName: 'gemini-2.0-flash-thinking-exp',
          temperature: 0.7,
          apiKey: geminiApiKey,
        }),
      },
      'gemini-2.0-flash-exp': {
        displayName: 'Gemini 2.0 Flash Experimental',
        model: new ChatGoogleGenerativeAI({
          modelName: 'gemini-2.0-flash-exp',
          temperature: 0.7,
          apiKey: geminiApiKey,
        }),
      }
    };

    return chatModels;
  } catch (err) {
    logger.error(`Error loading Gemini models: ${err}`);
    return {};
  }
};

export const loadGeminiEmbeddingsModels = async () => {
  const geminiApiKey = getGeminiApiKey();

  if (!geminiApiKey) return {};

  try {
    const embeddingModels = {
      'text-embedding-004': {
        displayName: 'Text Embedding',
        model: new GoogleGenerativeAIEmbeddings({
          apiKey: geminiApiKey,
          modelName: 'text-embedding-004',
        }),
      },
    };

    return embeddingModels;
  } catch (err) {
    logger.error(`Error loading Gemini embeddings model: ${err}`);
    return {};
  }
};
