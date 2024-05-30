import { Dispatch, SetStateAction } from "react";

export interface Session {
    id: number;
    title: string;
    messages: Message[];
  }
  export interface SidebarProps {
    sessions: Session[];
    onSelectSession: Dispatch<SetStateAction<Session | null>>
  }
  export interface ChatListProps {
    sessions: Session[];
    onSelectSession: Dispatch<SetStateAction<Session | null>>;
    onDeleteSession: (sessionId: string) => void;
  }
  export interface Message {
    id: number;
    text: string;
    sender: 'user' | 'bot';
  }
