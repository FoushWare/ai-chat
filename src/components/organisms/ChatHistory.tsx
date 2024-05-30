import { Message } from "@/types";
import ChatMessage from "../molecules/ChatMessage";
import { useRef, useEffect } from "react";

interface ChatHistoryProps {
  messages: Message[];
}
const ChatHistory = ({ messages }: ChatHistoryProps) => {
  const chatEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="bg-white p-4  border-gray-300 rounded-md mt-4 flex-grow overflow-y-auto h-full">
      {messages.map((msg, index) => (
        <ChatMessage key={index} message={msg} />
      ))}
      <div ref={chatEndRef}></div>

    </div>
  );
};

export default ChatHistory;