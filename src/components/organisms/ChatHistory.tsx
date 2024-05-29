import { Message } from "@/types";
import ChatMessage from "../molecules/ChatMessage";

interface ChatHistoryProps {
  messages: Message[];
}
const ChatHistory = ({ messages }: ChatHistoryProps) => {
  return (
    <div className="bg-white p-4 border border-gray-300 rounded-md mt-4 flex-grow overflow-y-auto">
      {messages.map((message, index) => (
        // <ChatMessage key={index} message={msg} />
        <div
        key={message.id}
        className={`p-2 my-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
      >
        <span
          className={`inline-block p-2 rounded ${
            message.sender === 'user'
              ? 'bg-blue-500 text-white self-end'
              : 'bg-gray-200 text-black self-start'
          }`}
        >
          {message.text}
        </span>
      </div>
    ))}
  </div>
  );
};

export default ChatHistory;