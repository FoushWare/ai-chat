
import React, { Dispatch, SetStateAction } from 'react';
import { PlusIcon} from '@heroicons/react/24/solid'
import { Bars3Icon} from '@heroicons/react/24/outline'

import ChatList from '@components/molecules/ChatList';
import { Session } from '@/types';



interface SidebarProps {
  sessions: Session[];
  onSelectSession: Dispatch<SetStateAction<Session | null>>
  onCreateNewSession: (initialMessage?: string) => void;
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ sessions, onSelectSession, onCreateNewSession, sidebarOpen, setSidebarOpen }) => {
  return (
    <div className={`fixed inset-y-0 left-0 transform ${sidebarOpen? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:relative lg:w-64 transition-transform duration-300 ease-in-out w-64 bg-gray-100 border-r border-gray-3000 z-50`}>
    <div className='flex justify-between items-center p-4'>
      <Bars3Icon className="h-8 mr-2 lg:hidden" onClick={() => setSidebarOpen(false)} />
      </div>

      <div className="flex justify-between items-center p-4 ">
        <h2 className="text-xl font-semibold">Sessions</h2>
        <button
          onClick={() => onCreateNewSession("")}
          className="p-2 bg-purple-500 text-white rounded-full hover:bg-purple-600"
        >
          <PlusIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="flex-grow overflow-y-auto max-h-[calc(100vh-8rem)]">
        <ChatList sessions={sessions} onSelectSession={onSelectSession} />
      </div>
    </div>
  );
};

export default Sidebar;
