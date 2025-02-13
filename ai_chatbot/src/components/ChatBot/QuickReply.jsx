import React from "react";

export function QuickReply({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700 
        text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg transform hover:scale-105 
        transition-all duration-200 active:scale-95"
    >
      {text}
    </button>
  );
}
