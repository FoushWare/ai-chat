import { Message } from '@/types';
import montaLogo from '../../assets/monta-logo.png';


interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <div className={`my-2 p-2 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
      {message.sender === 'bot' && (
        <img
          src={montaLogo}
          alt="Bot avatar"
          className="w-10 h-10 rounded-full mr-2"
        />
      )}
      <div
        className={`p-2 rounded ${
          message.sender === 'user'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-black'
        }`}
      >
        {message.text}
      </div>
    </div>
  );
};

export default ChatMessage;
