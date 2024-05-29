import { useEffect, useState } from "react";
import Sidebar from "@components/organisms/Sidebar";
import { Session, Message } from "@/types";
import MainChat from "@components/organisms/MainChat";
import ChatForm from "@components/molecules/ChatForm";

const ChatPage = () => {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [currentSession, setCurrentSession] = useState<Session | null>(null);

  useEffect(() => {
    const storedSessions = JSON.parse(localStorage.getItem('chatSessions') || '[]');
    setSessions(storedSessions);
    if (storedSessions.length > 0) {
      setCurrentSession(storedSessions[0]);
    }
  }, []);

  const addMessageToSession = (message: string, sender: 'user' | 'bot') => {
    if (currentSession) {
      const newMessage: Message = {
        id: Date.now(),
        text: message,
        sender: sender,
      };
      const updatedSession = {
        ...currentSession,
        messages: [...currentSession.messages, newMessage],
      };
      const updatedSessions = sessions.map((session) =>
        session.id === currentSession.id ? updatedSession : session
      );
      setSessions(updatedSessions);
      setCurrentSession(updatedSession);
      localStorage.setItem('chatSessions', JSON.stringify(updatedSessions));
    }
  };

  const handleSendMessage = (message: string) => {
    addMessageToSession(message, 'user');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = `Bot response to: ${message}`;
      addMessageToSession(botResponse, 'bot');
    }, 1000);
  };

  const createNewSession = () => {
    const newSession: Session = {
      id: Date.now(),
      title: `Session ${sessions.length + 1}`,
      messages: [],
    };
    const updatedSessions = [newSession, ...sessions];
    setSessions(updatedSessions);
    setCurrentSession(newSession);
    localStorage.setItem('chatSessions', JSON.stringify(updatedSessions));
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar 
        sessions={sessions} 
        onSelectSession={setCurrentSession} 
        onCreateNewSession={createNewSession} 
      />
      <div className="flex-1 flex flex-col relative">
        <div className="flex-grow overflow-y-auto p-4">
          <MainChat messages={currentSession ? currentSession.messages : []} />
        </div>
        <div className="absolute bottom-0 w-full p-4 bg-white">
          <ChatForm onSend={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
