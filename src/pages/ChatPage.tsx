import { useEffect, useState } from "react";
import Sidebar from "@components/organisms/Sidebar";

const ChatPage = () => {
    const [sessions, setSessions] = useState([
        { id: 1, title: 'Session 1', messages: [] },
        { id: 2, title: 'Session 2', messages: [] },
    ]);
    const [currentSession, setCurrentSession] = useState(null);
  
    
    return (
        <div className="flex min-h-screen">
            <Sidebar sessions={sessions} onSelectSession={setCurrentSession} />
            <p>main</p>
        </div>
      );
}
export default ChatPage;

