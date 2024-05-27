
const ChatList = ({ sessions, onSelectSession }) => {
  return (
    <div className="bg-white p-4 border border-gray-300 rounded-md overflow-y-auto h-full">
      <h2 className="text-xl font-semibold mb-4">Chat History</h2>
      {sessions.map((session, index) => (
        <div
          key={index}
          onClick={() => onSelectSession(session)}
          className="cursor-pointer p-2 border-b border-gray-200 hover:bg-gray-100"
        >
          {session.title || `Session ${index + 1}`}
        </div>
      ))}
    </div>
  );
};

export default ChatList;