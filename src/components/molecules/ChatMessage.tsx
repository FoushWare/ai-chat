import { Message } from '@/types';
import { Typography } from '../atoms/Typography';

interface ChatMessageProps {
  message: Message
}
const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <div className="my-2 p-2 border-b border-gray-200">
      <Typography className="text-gray-700">{message.text}</Typography>
    </div>
  );
};

export default ChatMessage;
