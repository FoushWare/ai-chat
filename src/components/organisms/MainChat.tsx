import { Message } from '@/types';
import ChatHistory from './ChatHistory';
import Header from "@components/organisms/Header";
import { Dispatch, SetStateAction } from 'react';
import ChatForm from '../molecules/ChatForm';

interface MainChatProps {
  messages: Message[]
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
  handleSendMessage: (message: string) => void;
}
const MainChat = ({ messages,  setSidebarOpen, handleSendMessage }: MainChatProps) => {
  return (
    <div className="w-full p-4 flex flex-col h-full relative">
      <Header  setSidebarOpen={setSidebarOpen} />
      <div className='flex-grow overflow-y-auto max-h-[calc(100vh-15rem)] border-2 border-gray-300 rounded-md'>
      <ChatHistory messages={messages} />
      </div>
      <ChatForm onSend={handleSendMessage} />
    </div>
  );
};

export default MainChat;