import React from 'react';

export function TypingIndicator() {
  return (
    <div className="flex items-center gap-2 p-3 bg-gradient-to-br from-gray-50 to-gray-100 
      dark:from-gray-800 dark:to-gray-900 rounded-2xl w-24 shadow-md">
      <div className="flex gap-1">
        <div className="w-2.5 h-2.5 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full animate-bounce" 
          style={{ animationDelay: '0ms' }} />
        <div className="w-2.5 h-2.5 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full animate-bounce" 
          style={{ animationDelay: '150ms' }} />
        <div className="w-2.5 h-2.5 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full animate-bounce" 
          style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  );
}