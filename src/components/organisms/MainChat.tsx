import ChatHistory from './ChatHistory';

interface MainChatProps {
  messages: string[];
  onSend: (message: string) => void;
}
const MainChat = ({ messages, onSend }: MainChatProps) => {
  return (
    <div className="w-full p-4 flex flex-col h-full">
      <ChatHistory messages={messages} />
      {/* <ChatForm onSend={onSend} /> */}
      <div onClick={() => onSend('test')}>chat form</div>
    </div>
  );
};

export default MainChat;