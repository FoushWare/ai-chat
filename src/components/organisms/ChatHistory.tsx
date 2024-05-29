import { Message } from "@/types";
import ChatMessage from "../molecules/ChatMessage";

interface ChatHistoryProps {
  messages: Message[];
}
const ChatHistory = ({ messages }: ChatHistoryProps) => {
  return (
    <div className="bg-white p-4  border-gray-300 rounded-md mt-4 flex-grow overflow-y-auto h-full">
      {messages.map((msg, index) => (
        <ChatMessage key={index} message={msg} />
    ))}
  </div>
  );
};

export default ChatHistory;