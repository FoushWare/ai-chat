import { Message } from '@/types';
import ChatHistory from './ChatHistory';
import Header from "@components/organisms/Header";

interface MainChatProps {
  messages: Message[]
}
const MainChat = ({ messages }: MainChatProps) => {
  return (
    <div className="w-full p-4 flex flex-col h-full relative">
      <Header />
      <ChatHistory messages={messages} />
    </div>
  );
};

export default MainChat;