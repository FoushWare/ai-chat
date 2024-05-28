import { Typography } from '../atoms/Typography';

interface ChatMessageProps {
  message: string;
}
const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <div className="my-2 p-2 border-b border-gray-200">
      <Typography className="text-gray-700">{message}</Typography>
    </div>
  );
};

export default ChatMessage;
