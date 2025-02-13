import React from "react";
import { Bot, User } from "lucide-react";

export function ChatMessage({ message, isBot, timestamp }) {
  return (
    <div className={`flex gap-3 ${isBot ? "" : "flex-row-reverse"} animate-fade-in`}>
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform ${
          isBot ? "bg-gradient-to-br from-purple-500 to-purple-700" : "bg-gradient-to-br from-blue-500 to-blue-700"
        }`}
      >
        {isBot ? <Bot size={20} className="text-white" /> : <User size={20} className="text-white" />}
      </div>
      <div
        className={`max-w-[80%] ${
          isBot
            ? "bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900"
            : "bg-gradient-to-br from-blue-500 to-blue-600 text-white ml-auto"
        } rounded-2xl px-6 py-3 shadow-md hover:shadow-lg transition-shadow`}
      >
        <p className="text-sm leading-relaxed">{message}</p>
        <span className="text-xs opacity-70 mt-2 block font-medium">{timestamp}</span>
      </div>
    </div>
  );
}
