import React from 'react';
import { Message } from '../../types/chat';

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isSupport = message.sender === 'support';

  return (
    <div className={`flex ${isSupport ? 'justify-start' : 'justify-end'}`}>
      <div
        className={`max-w-[80%] rounded-lg px-4 py-2 ${
          isSupport
            ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
            : 'bg-green-600 text-white'
        }`}
      >
        <p className="text-sm">{message.content}</p>
        <span className="text-xs opacity-75 mt-1 block">
          {message.timestamp.toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
}