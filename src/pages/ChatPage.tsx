import { useEffect, useState } from "react";
import Sidebar from "@components/organisms/Sidebar";
import { Session } from "@/types";



const ChatPage = () => {
    const [sessions, setSessions] = useState<Session[]>([
        { id: 1, title: 'Session 1', messages: [] },
        { id: 2, title: 'Session 2', messages: [] },
    ]);
    const [currentSession, setCurrentSession] = useState<Session | null>(null);
  
 
    return (
        <div className="flex min-h-screen">
            <Sidebar sessions={sessions} onSelectSession={setCurrentSession} />
            <p>main</p>
        </div>
      );
}
export default ChatPage;

