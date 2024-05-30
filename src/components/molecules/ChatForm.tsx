// src/components/molecules/ChatForm.jsx
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import {  useState } from 'react';

interface ChatFormProps {
  onSend: (message: string) => void;
  setSidebarOpen: (open: boolean) => void;
}
const ChatForm = ({ onSend, setSidebarOpen }: ChatFormProps) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mt-4">
      <Input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onClick={() => setSidebarOpen(false)}
        placeholder="Type a message..."
      />
      <Button type="submit" className="rounded-l-none">
        Send
      </Button>
    </form>
  );
};

export default ChatForm;
