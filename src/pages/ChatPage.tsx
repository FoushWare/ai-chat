import { useEffect, useState } from "react";
import Sidebar from "@components/organisms/Sidebar";
import { Session, Message } from "@/types";
import MainChat from "@components/organisms/MainChat";


const ChatPage = () => {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [currentSession, setCurrentSession] = useState<Session | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const storedSessions = JSON.parse(localStorage.getItem('chatSessions') || '[]');
    if (storedSessions) {
      setSessions(storedSessions);
      // Assuming you have a way to determine the current session
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
      const botResponse : Message = {
        id: Date.now(),
        text: `Bot response to: ${message}`,
        sender: 'bot',
      };
      const updatedSession = {
        ...currentSession,
        messages: [...currentSession.messages, newMessage,
          botResponse
        ],
      };
      const updatedSessions = sessions.map((session) =>
        session.id === currentSession.id ? updatedSession : session
      );
      console.log("updatedSessions",updatedSessions);
      setSessions(updatedSessions);
      setCurrentSession(updatedSession);
      localStorage.setItem('chatSessions', JSON.stringify(updatedSessions));
    }
  };
  

  const handleSendMessage = (message: string) => {
    addMessageToSession(message, 'user');
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
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="flex-1 flex flex-col relative">
        <div className="flex-grow overflow-y-auto p-4">
          <MainChat messages={currentSession ? currentSession.messages : []} 
            setSidebarOpen={setSidebarOpen}
            handleSendMessage={handleSendMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
