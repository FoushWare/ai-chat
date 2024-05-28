import ChatMessage from "../molecules/ChatMessage";

interface ChatHistoryProps {
  messages: string[];
}
const ChatHistory = ({ messages }: ChatHistoryProps) => {
  return (
    <div className="bg-white p-4 border border-gray-300 rounded-md mt-4 flex-grow overflow-y-auto">
      {messages.map((msg, index) => (
        <ChatMessage key={index} message={msg} />
      ))}
    </div>
  );
};

export default ChatHistory;