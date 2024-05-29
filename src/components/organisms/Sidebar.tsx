
import React, { Dispatch, SetStateAction } from 'react';
import { PlusIcon} from '@heroicons/react/24/solid'

import ChatList from '@components/molecules/ChatList';
import { Session } from '@/types';



interface SidebarProps {
  sessions: Session[];
  onSelectSession: Dispatch<SetStateAction<Session | null>>
  onCreateNewSession: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sessions, onSelectSession, onCreateNewSession }) => {
  return (
    <div className="w-1/4 bg-gray-100 h-screen border-r border-gray-300 flex flex-col">
      <div className="flex justify-between items-center p-4 ">
        <h2 className="text-xl font-semibold">Sessions</h2>
        <button
          onClick={onCreateNewSession}
          className="p-2 bg-purple-500 text-white rounded-full hover:bg-purple-600"
        >
          <PlusIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="flex-grow overflow-y-auto">
        <ChatList sessions={sessions} onSelectSession={onSelectSession} />
      </div>
    </div>
  );
};

export default Sidebar;
