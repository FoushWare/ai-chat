import { Dispatch, SetStateAction } from "react";

export interface Session {
    id: number;
    title: string;
    messages: string[]; // Adjust the type of messages as per your application's requirement
  }
  export interface SidebarProps {
    sessions: Session[];
    onSelectSession: Dispatch<SetStateAction<Session | null>>
  }
  export interface ChatListProps {
    sessions: Session[];
    onSelectSession: Dispatch<SetStateAction<Session | null>>
  }
