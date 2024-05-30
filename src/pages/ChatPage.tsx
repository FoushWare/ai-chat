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
      setCurrentSession(storedSessions[0]);
    }
  }, []);

  // check if the window is in mobile view and set the sidebar to false to hide it when first loaded
  useEffect(() => {
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  }, []);

  const addMessageToSession = (message: string, sender: 'user' | 'bot') => {
    if (currentSession) {
      const newMessage: Message = {
        id: Date.now(),
        text: message,
        sender: sender,
      };
      const botResponse: Message = {
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
      console.log("updatedSessions", updatedSessions);
      setSessions(updatedSessions);
      setCurrentSession(updatedSession);
      localStorage.setItem('chatSessions', JSON.stringify(updatedSessions));
    }
  };


  const handleSendMessage = (message: string) => {
    if (!currentSession) {
      createNewSession(message);
    } else {
      addMessageToSession(message, 'user');
    }
  };

  const createNewSession = (initialMessage?: string) => {
    const newSession: Session = {
      id: Date.now(),
      title: `Session ${sessions.length + 1}`,
      messages: initialMessage ? [{ id: Date.now(), text: initialMessage, sender: 'user' },{
        id: Date.now(),
        text: `Bot response to: ${initialMessage}`,
        sender: 'bot',
      }]
       : [],
    };
    const updatedSessions = [newSession, ...sessions];
    setSessions(updatedSessions);
    setCurrentSession(newSession);
    console.log("updatedSessions", updatedSessions);
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
          {/* Header, ChatHistory, ChatForm */}
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
