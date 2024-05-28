import { useEffect, useState } from "react";
import Sidebar from "@components/organisms/Sidebar";
import { Session } from "@/types";
import MainChat from "@components/organisms/MainChat";
import Header from "@components/organisms/Header";



const ChatPage = () => {
  const [sessions, setSessions] = useState<Session[]>([
    { id: 1, title: 'Session 1', messages: [] },
    {
      id: 2, title: 'Session 2', messages: [
        "hello",
        "hi",
        "how are you",
        "i am fine"

      ]
    },
  ]);
  const [currentSession, setCurrentSession] = useState<Session | null>(
    // last session
    sessions[sessions.length - 1]
  );

  // useEffect(() => {
  //     const storedSessions = JSON.parse(localStorage.getItem('chatSessions') || '[]');
  //   setSessions(storedSessions);
  //   if (storedSessions.length > 0) {
  //     setCurrentSession(storedSessions[0]);
  //   }
  // }, []);

  const addMessageToSession = (message: string) => {
    if (currentSession) {
      const updatedSession = {
        ...currentSession,
        messages: [...currentSession.messages, message],
      };
      const updatedSessions = sessions.map((session) =>
        session.id === currentSession.id ? updatedSession : session
      );
      setSessions(updatedSessions);
      setCurrentSession(updatedSession);
      localStorage.setItem('chatSessions', JSON.stringify(updatedSessions));
    }
  };

  // const createNewSession = () => {
  //   const newSession = {
  //     id: Date.now(),
  //     title: `Session ${sessions.length + 1}`,
  //     messages: [],
  //   };
  //   const updatedSessions = [newSession, ...sessions];
  //   setSessions(updatedSessions);
  //   setCurrentSession(newSession);
  //   localStorage.setItem('chatSessions', JSON.stringify(updatedSessions));
  // };
  console.log("current session", currentSession)
  return (
    <div className="flex min-h-screen">
      <Sidebar sessions={sessions} onSelectSession={setCurrentSession} />
      <div className="w-3/4 p-4 flex flex-col h-full">
        <Header />
        <MainChat messages={currentSession ? currentSession.messages : []} onSend={addMessageToSession} />
      </div>

    </div>
  );
}
export default ChatPage;

