import React from 'react';
import { ChatBot } from './components/ChatBot/ChatBot';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800 
          dark:from-purple-400 dark:to-purple-600 mb-4">
          Gaming Platform
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Welcome to our gaming platform. Need help? Use the chat widget in the bottom right corner.
        </p>
      </div>
      <ChatBot />
    </div>
  );
}

export default App