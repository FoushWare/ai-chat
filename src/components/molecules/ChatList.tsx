import { ChatListProps } from "@/types";
import { TrashIcon } from '@heroicons/react/24/solid'


const ChatList: React.FC<ChatListProps> = ({ sessions, onSelectSession, onDeleteSession }) => {
  const sortedSessions = sessions.sort((a, b) => new Date(b.id).getTime() - new Date(a.id).getTime());
  return (
    <div className="bg-white p-4 border border-gray-300 rounded-md overflow-y-auto h-full">
      <h2 className="text-xl font-semibold mb-4">Chat History</h2>

      {sortedSessions.map((session, index) => (
        <div className="flex items-center gap-2 w-full">
        <div
          key={index}
          onClick={() => onSelectSession(session)}
          className="cursor-pointer p-2 border-b border-gray-200 hover:bg-gray-100 flex justify-between"
        >
          {session.title || `Session ${index + 1}`}
          {/* delete icon button */}

        </div>
        <div className="flex items-center justify-center hover:bg-gray-100 rounded-md p-2 cursor-pointer"
        onClick={() => onDeleteSession(session.id.toString())}
        >
          <TrashIcon className="w-4 h-4 text-red-500" />
        </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;