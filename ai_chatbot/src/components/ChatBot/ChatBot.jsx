import React, { useState, useEffect } from "react";
import {
  MessageSquare,
  X,
  Minimize2,
  Send,
  Moon,
  Sun,
  Maximize2,
} from "lucide-react";
import { ChatMessage } from "./ChatMessage";
import { QuickReply } from "./QuickReply";
import { TypingIndicator } from "./TypingIndicator";

const quickReplies = [
  "Game Rules",
  "Withdraw Money",
  "Contact Support",
  "Responsible Gaming",
];

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "👋 Hi! How can I help you with gaming today?",
      isBot: true,
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        text: inputValue,
        isBot: false,
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          text: "Thanks for your message! Our support team will assist you shortly.",
          isBot: true,
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);
    }, 1500);
  };

  const handleQuickReply = (reply) => {
    setMessages((prev) => [
      ...prev,
      {
        text: reply,
        isBot: false,
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          text: `Here's information about ${reply.toLowerCase()}...`,
          isBot: true,
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);
    }, 1500);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsMinimized(false);
    // Reset messages when closing
    setMessages([
      {
        text: "👋 Hi! How can I help you with gaming today?",
        isBot: true,
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);
    setInputValue("");
    setIsTyping(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 
          rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform 
          hover:scale-105 transition-all duration-200 active:scale-95"
      >
        <MessageSquare className="text-white" size={28} />
      </button>
    );
  }

  return (
    <div
      className={`fixed bottom-6 right-6 w-96 ${
        isMinimized ? "h-14" : "h-[600px]"
      } 
      bg-white dark:bg-gray-900 rounded-2xl shadow-2xl flex flex-col transition-all duration-300
      border border-gray-200 dark:border-gray-800`}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-500 to-purple-600 
        rounded-t-2xl border-b dark:border-gray-800"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <MessageSquare className="text-white" size={24} />
          </div>
          <div>
            <h2 className="font-bold text-white text-lg">Gaming Support</h2>
            <p className="text-purple-100 text-sm">Online</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
            aria-label={isMinimized ? "Maximize" : "Minimize"}
          >
            {isMinimized ? <Maximize2 size={20} /> : <Minimize2 size={20} />}
          </button>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
            aria-label="Close chat"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-br from-gray-50 to-gray-100 
            dark:from-gray-900 dark:to-gray-950"
          >
            {messages.map((msg, idx) => (
              <ChatMessage
                key={idx}
                message={msg.text}
                isBot={msg.isBot}
                timestamp={msg.timestamp}
              />
            ))}
            {isTyping && <TypingIndicator />}
          </div>

          {/* Quick Replies */}
          <div className="p-4 bg-white dark:bg-gray-900 border-t dark:border-gray-800 rounded-b-2xl">
            <div className="flex flex-wrap gap-2 mb-4">
              {quickReplies.map((reply) => (
                <QuickReply
                  key={reply}
                  text={reply}
                  onClick={() => handleQuickReply(reply)}
                />
              ))}
            </div>

            {/* Input */}
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-6 py-3 rounded-full border border-gray-200 dark:border-gray-700 
                  dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 
                  dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full 
                  shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 
                  active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
