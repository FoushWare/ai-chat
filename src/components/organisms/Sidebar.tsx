import ChatList from "@components/molecules/ChatList";

const Sidebar = ({ sessions, onSelectSession }) => {
  return (
    <div className="w-1/4  bg-gray-100 h-screen border-r border-gray-300">
      <ChatList sessions={sessions} onSelectSession={onSelectSession} />
    </div>
  );
};

export default Sidebar;